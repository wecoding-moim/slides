# nested for loop refactoring

```python {all} {maxHeight:'400px'}
def parse(self):
        try:
            self.browser.get(self.url)
            self.action = ActionChains(self.browser)

            school_category_elems = []
            city_elems = []
            county_elems = []
            school_elems = []

            school_category_elems = self.get_school_category_elems()
            for school_category_elem in school_category_elems:
                self.click(school_category_elem)

                city_elems = self.get_city_elems()
                for city_elem in city_elems:
                    self.click(city_elem)

                    county_elems = self.get_county_elems()
                    for county_elem in county_elems:
                        self.click(county_elem)

                        school_elems = self.get_school_elems()
                        for school_elem in school_elems:
                            self.click(school_elem)

                            search_button_elem = self.get_search_button_elem()
                            self.click(search_button_elem)
                            self.wait_until_page_loaded()
                            DetailPageCrawler(self.browser, self.action).parse()
```

---

# refactor code using recursive function.

```python {all} {maxHeight:'400px'}
def parse_by_depth(self, depth):
        if depth == 5:
            search_button_elem = self.get_search_button_elem()
            self.click(search_button_elem)
            self.wait_until_page_loaded()
            DetailPageCrawler(self.browser, self.action).parse()
            return

        container_xpath = f'//*[@id="contents"]/div/div[1]/div[2]/div[1]/div[{str(depth + 2)}]'
        container = self.browser.find_element(By.XPATH, container_xpath)

        elems = container.find_elements(By.TAG_NAME, "li")
        for elem in elems:
            self.click(elem)
            self.parse_by_depth(depth + 1)

def parse(self):
        try:
            self.browser.get(self.url)
            self.action = ActionChains(self.browser)
            self.parse_by_depth(1)

            return

        except Exception as e:
            print(e)
```
