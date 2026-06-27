# **Certifications**
<!-- 1. Load your core stylesheet and sliding script -->
<link rel="stylesheet" href="{{ site.baseurl }}/carousel.css">
<script src="{{ site.baseurl }}/carousel.js" defer></script>

<!-- 2. SAFE THEME TUNING (Only touches colors, completely protects images) -->
<style>
@media (prefers-color-scheme: dark) {
    /* Changes background colors safely without breaking dimensions */
    html, body, #wrapper, div.wrapper, section, header {
        background-color: #121212 !important;
        background-image: none !important;
        color: #e0e0e0 !important;
    }

    /* Sets textbook typography colors */
    h1, h2, h3, h4, h5, h6, strong, p, li, code, span, small {
        color: #ffffff !important;
        text-shadow: none !important;
    }

    /* Makes hyperlinks pop against dark background */
    a, a code, header a {
        color: #64b5f6 !important;
    }
    a:hover {
        color: #90caf9 !important;
    }
    hr {
        background: #333333 !important;
        border-color: #333333 !important;
    }
}

/* 3. CAROUSEL STRUCTURAL ENFORCEMENT (Overwrites Dinky's layout rules) */
.carousel-slide {
    display: flex !important; /* Enforces horizontal tracking alignment */
    flex-direction: row !important;
}

.carousel-slide a {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    flex-shrink: 0 !important;
}

.carousel-slide img {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important; /* Safeguards certificates from squishing */
    background: transparent !important;
}
</style>

<!-- 4. Correct Carousel HTML Frame -->
<div class="carousel-container">
    <button class="arrow left-arrow" id="prevBtn">&#10094;</button>
    
    <div class="carousel-slide" id="carouselSlide">
        <a href="/Adv dip.png" target="_blank" download>
            <img src="{{ site.baseurl }}/Adv dip.png" alt="Advanced Diploma">
        </a>
        <a href="/Cert IV.png" target="_blank" download>
            <img src="{{ site.baseurl }}/Cert IV.png" alt="Certificate IV">
        </a>
        <a href="/Cert 3.png" target="_blank" download>
            <img src="{{ site.baseurl }}/Cert 3.png" alt="Certificate III">
        </a>
    </div>

    <button class="arrow right-arrow" id="nextBtn">&#10095;</button>
</div>
# About me 

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```
[Link to another page](./another-page.html).
```
The final element.
```
