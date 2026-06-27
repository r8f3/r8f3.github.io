---
layout: default
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Certifications

<!-- 1. Theme Toggle Button Element -->
<div style="text-align: right; margin-bottom: 15px;">
    <button id="themeToggleBtn" class="toggle-btn">🌙 Dark Mode</button>
</div>

<!-- 2. Load Carousel Core Assets -->
<link rel="stylesheet" href="{{ site.baseurl }}/carousel.css">
<script src="{{ site.baseurl }}/carousel.js" defer></script>

<!-- 3. Explicit Dark/Light Structural Rules -->
<style>
/* Base structural rules to stop Dinky theme from breaking the slider layout */
.carousel-slide {
    display: flex !important;
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
    object-fit: contain !important;
}

/* Button UI Styling */
.toggle-btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 8px 14px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.2s ease;
}

/* --- MANUAL DARK MODE OVERRIDES --- */
/* These only activate when the .dark-theme class is injected by JavaScript */
body.dark-theme, 
body.dark-theme #wrapper, 
body.dark-theme div.wrapper, 
body.dark-theme section, 
body.dark-theme header {
    background-color: #121212 !important;
    background-image: none !important;
    color: #e0e0e0 !important;
}

body.dark-theme h1, body.dark-theme h2, body.dark-theme h3, 
body.dark-theme h4, body.dark-theme h5, body.dark-theme h6, 
body.dark-theme strong, body.dark-theme p, body.dark-theme li, 
body.dark-theme code, body.dark-theme span, body.dark-theme small {
    color: #ffffff !important;
    text-shadow: none !important;
}

body.dark-theme a, body.dark-theme a code, body.dark-theme header a {
    color: #64b5f6 !important;
}

body.dark-theme hr {
    background: #333333 !important;
    border-color: #333333 !important;
}

body.dark-theme .carousel-container {
    background-color: #1e1e1e !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6) !important;
}

body.dark-theme .toggle-btn {
    background-color: #fff;
    color: #333;
}
</style>

<!-- 4. Carousel HTML Structure -->
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

<!-- 5. Toggle Logic Script Component -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("themeToggleBtn");
    
    // Check if user previously saved a theme selection
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        toggleBtn.innerText = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerText = "🌙 Dark Mode";
        }
    });
});
</script>
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
