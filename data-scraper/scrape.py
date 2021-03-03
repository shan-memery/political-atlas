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

    speechlink = speech.find('a').get('href')

    speechhtml = requests.get(baselink + speechlink).text
    speechsoup = bs4.BeautifulSoup(speechhtml, features='html.parser')

    politician = get_text_from_class(speechsoup, 'president-name')

    videolink = get_href_from_class(speechsoup, 'download-trigger full-video')

    audiolink = get_href_from_class(speechsoup, 'download-trigger audio')

    date = get_text_from_class(speechsoup, 'episode-date')

    description = get_text_from_class(speechsoup, 'about-sidebar--intro')

    sentences = speechsoup.find(attrs={'class': 'transcript-inner'}).findAll('p')
    transcript = ' '.join(sentence.text for sentence in sentences).replace('\n', '')

    dump = {
        'politician': politician,
        'title': title,
        'speech-link': speechlink,
        'video-link': videolink,
        'audio-link': audiolink,
        'date': date,
        'description': description,
        'transcript': transcript
    }

    print(dump)
    print()
