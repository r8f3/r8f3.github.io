---
layout: default
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Certifications

<!-- 1. Load the carousel styles and logic -->
<link rel="stylesheet" href="{{ site.baseurl }}/carousel.css">
<script src="{{ site.baseurl }}/carousel.js" defer></script>

<!-- 2. FORCE DARK MODE OVERRIDES (Injected directly to beat Dinky) -->
<style>
@media (prefers-color-scheme: dark) {
    /* Target every structural wrapper Dinky uses */
    html, body, #wrapper, div.wrapper, section, header {
        background-color: #121212 !important;
        background-image: none !important; /* Erases Dinky's default bright gradients */
        color: #e0e0e0 !important;
    }

    /* Force all text blocks to change color */
    h1, h2, h3, h4, h5, h6, strong, p, li, code, span, small {
        color: #ffffff !important;
        text-shadow: none !important;
    }

    /* Keep hyperlinks readable */
    a, a code, header a {
        color: #64b5f6 !important;
    }
    a:hover {
        color: #90caf9 !important;
    }

    /* Darken lines and borders */
    hr {
        background: #333333 !important;
        border-color: #333333 !important;
    }
    
    /* Ensure the carousel container matches the dark backdrop */
    .carousel-container {
        background-color: #1e1e1e !important;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6) !important;
    }
}
</style>

<!-- 3. Carousel HTML Structure -->
<div class="carousel-container">
    <button class="arrow left-arrow" id="prevBtn">&#10094;</button>
    
    <div class="carousel-slide" id="carouselSlide">
        <a href="/adv dip.png" target="_blank" download>
            <img src="{{ site.baseurl }}/adv dip.png" alt="Advanced Diploma">
        </a>
        <a href="/cert iv.png" target="_blank" download>
            <img src="{{ site.baseurl }}/cert iv.png" alt="Certificate IV">
        </a>
        <a href="/cert 3.png" target="_blank" download>
            <img src="{{ site.baseurl }}/cert 3.png" alt="Certificate III">
        </a>
    </div>

    <button class="arrow right-arrow" id="nextBtn">&#10095;</button>
</div>

## Header 2

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

```
The final element.
```
