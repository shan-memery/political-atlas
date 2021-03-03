import requests
import bs4

def get_text_from_class(soup, classname):
    return soup.find(attrs={'class': classname}).text

def get_href_from_class(soup, classname):
    return soup.find(attrs={'class': classname}).get('href')

baselink = 'http://millercenter.org'

listlink = 'https://millercenter.org/the-presidency/presidential-speeches'
listhtml = requests.get(listlink).text
listsoup = bs4.BeautifulSoup(listhtml, features='html.parser')

for speech in listsoup.findAll(attrs={'class':'views-field-title'})[:1]:
    title = speech.text
    print('Title:', title)

    speechlink = speech.find('a').get('href')
    print('Speech Link:', speechlink)

    speechhtml = requests.get(baselink + speechlink).text
    speechsoup = bs4.BeautifulSoup(speechhtml, features='html.parser')

    politician = get_text_from_class(speechsoup, 'president-name')
    print('Politician:', politician)

    videolink = get_href_from_class(speechsoup, 'download-trigger full-video')
    print('Video Link:', videolink)

    audiolink = get_href_from_class(speechsoup, 'download-trigger audio')
    print('Audio Link:', audiolink)

    date = get_text_from_class(speechsoup, 'episode-date')
    print('Date:', date)

    description = get_text_from_class(speechsoup, 'about-sidebar--intro')
    print('Description:', description)

    sentences = speechsoup.find(attrs={'class': 'transcript-inner'}).findAll('p')
    transcript = ' '.join(sentence.text for sentence in sentences).replace('\n', '')
    print('Transcript')
    print(transcript)

    print()
