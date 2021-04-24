import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

import DateFnsUtils from "@date-io/date-fns";
import { default as dateFormat } from "date-fns/format";
import isBefore from "date-fns/isBefore";

import * as JsSearch from "js-search";
import * as Stemmer from "porter-stemmer";

import Layout from "src/components/Layout";
import SpeechList from "src/components/SpeechList";

import { getSpeechList } from "src/api/Server";

const useStyles = makeStyles((theme) => ({
  load: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  searchinput: {
    textAlign: "center",
    position: "relative",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Search = () => {
  const classes = useStyles();

  const stemmer = Stemmer.stemmer;

  const [speeches, setSpeeches] = useState(null);
  const [loading, setLoading] = useState(true);
  const [speechesToDisplay, setSpeechesToDisplay] = useState(null);

  const [politicians, setPoliticians] = useState([]);
  const [dateConstraints, setDateContraints] = useState([
    new Date(),
    new Date(),
  ]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [input, setInput] = useState({
    context: "",
    politician: null,
  });

  useEffect(() => {
    const setup = async () => {
      const list = await getSpeechList();
      if (list && list.data.length > 0) {
        setSpeeches(list.data);

        setPoliticians((prev) => {
          const politicians = [
            ...new Set(list.data.map(({ politician }) => politician)),
          ];
          politicians.sort();
          return politicians;
        });

        const firstDate = new Date(list.data[0].date);
        let [minDate, maxDate] = [firstDate, firstDate];
        list.data.forEach(({ date }) => {
          const newDate = new Date(date);
          if (isBefore(newDate, minDate)) minDate = newDate;
          if (isBefore(maxDate, newDate)) maxDate = newDate;
        });

        setStartDate(minDate);
        setEndDate(maxDate);
        setDateContraints([minDate, maxDate]);
      } else {
        setSpeeches([]);
      }

      setLoading(false);
    };
    setup();
  }, []);

  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const searchList = () => {
    setLoading(true);
    setSpeechesToDisplay(null);

    const filteredSpeeches = speeches.filter((speech) => {
      if (input.politician != null && input.politician !== speech.politician) {
        return false;
      }

      const date = new Date(speech.date);
      if (isBefore(date, startDate) || isBefore(endDate, date)) {
        return false;
      }

      return true;
    });

    let search = new JsSearch.Search("id");
    search.tokenizer = new JsSearch.StemmingTokenizer(
      stemmer,
      new JsSearch.SimpleTokenizer()
    );
    search.addIndex("title");
    search.addIndex("description");
    search.addDocuments(filteredSpeeches);

    let relevantSpeeches = search.search(input.context);

    setSpeechesToDisplay(relevantSpeeches);
    setLoading(false);
  };

  return (
    <Layout title="Search">
      {/* {speeches != null && speeches.length > 0 && ( */}
      {/* )} */}

      <div className={classes.searchinput}>
        <TextField
          id="context"
          label="Search terms"
          value={input.context}
          onChange={handleInputChange}
        />

        <div style={{ display: "inline-flex" }}>
          <Autocomplete
            id="politician"
            options={politicians}
            value={input.politician}
            onChange={(event, newValue) => {
              const target = { id: "politician", value: newValue };
              handleInputChange({ target });
            }}
            autoHighlight
            getOptionLabel={(option) => option}
            renderOption={(option) => <>{option}</>}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Politician"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            id="start"
            autoOk
            label="Start"
            value={startDate}
            format="MM/dd/yyyy"
            variant="inline"
            minDate={dateConstraints[0]}
            maxDate={endDate}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            id="end"
            autoOk
            label="End"
            value={endDate}
            format="MM/dd/yyyy"
            variant="inline"
            minDate={startDate}
            maxDate={dateConstraints[1]}
            onChange={(date) => setEndDate(date)}
          />
        </MuiPickersUtilsProvider>
        <Button
          color="primary"
          variant="contained"
          style={{ position: "absolute", bottom: "0px" }}
          onClick={searchList}
        >
          Search
        </Button>
      </div>

      {loading && (
        <div className={classes.load}>
          <br />
          <CircularProgress size={100} />
        </div>
      )}

      {speechesToDisplay != null && <SpeechList speeches={speechesToDisplay} />}
    </Layout>
  );
};

export default Search;