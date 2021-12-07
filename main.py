import requests
from bs4 import BeautifulSoup
from docxtpl import DocxTemplate, R
from config import *
import os.path

MAIN_URL = ''
LAST_FIRST_NAME = ''
GROUP = 0
MALE = -1

DATA = []


def get_data(branch):
    return_data = {}

    def __get_file_content(__file_link, file):
        __file_link = __file_link.replace('/file-list', '').replace('github.com',
                                                                    'raw.githubusercontent.com') + '/' + file
        request = requests.get(__file_link)
        return request.content.decode()

    def __get_folder_content(__link):
        request = requests.get(__link)
        soup = BeautifulSoup(request.content.decode(), 'html.parser')
        elements = soup.find_all('div',
                                 {
                                     'class': 'Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item'})
        for element in elements:
            element_text = element.find('div', {'role': 'rowheader'}).find('span').text
            if element_text not in IGNORE:
                if 'octicon-file-directory' in element.find('svg')['class']:
                    __get_folder_content(__link + '/' + element_text)
                else:
                    if os.path.splitext(element_text)[1] not in IGNORE_FORMAT:
                        print(f" - WORK WITH FILE '{element_text}'")
                        return_data[((__link.split('/file-list/' + branch + '/')[1] + '/') if len(
                            __link.split('/file-list/' + branch + '/')) > 1 else '') + element_text] = \
                            __get_file_content(__link, element_text)

    link = MAIN_URL + '/file-list/' + branch
    __get_folder_content(link)
    return return_data


def generate():
    global DATA
    for data in DATA:
        print(f"GENERATE REPORT #{data['lab_number']}")
        doc = DocxTemplate("base.docx")
        context = {'who': LAST_FIRST_NAME,
                   'group': GROUP,
                   'lab': data['lab_number'],
                   'git': MAIN_URL + '/tree/' + data['branch'],
                   'title': TASKS[data['lab_number']]['title'],
                   'task': TASKS[data['lab_number']]['task'],
                   'gender': 'Виконав студент' if MALE else 'Виконала студентка',
                   'data': get_data(data['branch'])
                   }
        doc.render(context)
        if not os.path.exists('reports'):
            os.mkdir('reports')
        doc.save(f"reports/{LAST_FIRST_NAME} - lab {data['lab_number']}.docx")
        print(f"REPORT #{data['lab_number']} SUCCESS GENERATED")


def get_number(text):
    count = 0
    while count not in range(1, 12):
        try:
            count = int(input(text))
        except ValueError:
            pass
    return count


def start():
    global MAIN_URL
    while not MAIN_URL:
        MAIN_URL = input('Enter url to git repository (https://github.com/DioniS1902/web) : ')
    global LAST_FIRST_NAME
    while not LAST_FIRST_NAME:
        LAST_FIRST_NAME = input('Enter your name and surname (Іван Іванов) : ')
    global GROUP
    while not GROUP:
        GROUP = input('Enter your group (22) : ')
    global MALE
    while MALE not in ['0', '1']:
        MALE = input('Enter 1 if you man and 0 if you woman : ')
    MALE = bool(int(MALE))
    report_count = get_number('Enter how many reports do you need [1-11] : ')
    for _ in range(int(report_count)):
        lab_number = get_number('Enter lab number [1-11] : ')
        branch = input('Enter branch for this lab : ')
        DATA.append({
            'branch': branch,
            'lab_number': lab_number, })

    generate()


if __name__ == '__main__':
    start()
