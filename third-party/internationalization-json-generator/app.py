# -*- coding: UTF-8 -*-
import csv
import json
import os

FILES_DIR='files/'
OUTPUT_DIR='jsons/'

files = os.listdir(FILES_DIR)
for f in files:
    data = {}
    with open(FILES_DIR + f, encoding="utf-8") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            data[row[0]] = row[1]

    fname = f.split('.')[0].replace('locales - ', '')
    with open(OUTPUT_DIR + fname + '.json', 'w', encoding="utf-8") as outfile:
        json.dump(data, outfile, indent=4, sort_keys=True, ensure_ascii=False)