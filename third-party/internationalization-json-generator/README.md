# Internationalization JSON generator

- Create or update a language in [locales google sheet](https://docs.google.com/spreadsheets/d/1csv6_mBvEU8TzC3wPhUSlIjTCB19FRTSFb9QG5LIGH0/edit?usp=sharing)
- Export each tab to a `CSV` file on the [`files`](./files) directory
- Run [`app.py`](./app.py) script 
```bash
python3 app.py
```
- Copy `JSON` files from [`jsons`](./jsons) to [`locales`](/public/locales) directory
```bash
cp -f jsons/* ../../public/locales/
```