# Flags
Flags Style Sheet

We often need flags, for language selection, country specific dropdown's and so many other reasons.
which is why instead of having 253 random png's downloaded, we use a sprite for browser performance.

An example layout for the html.
make the element with the flag icon, and the specific flag, with an optional flag-size .. or alternativly use the css zoom option to control the flag size if you want specificity.

<!DOCTYPE html>
    <html>
    <head>
        <link href="flags.css" rel="stylesheet"></style>
    </head>
    <body>
        <div class="flag faroe_islands pico"></div>
        <div class="flag faroe_islands small"></div>
        <div class="flag faroe_islands"></div>
        <div class="flag faroe_islands larger"></div>
    </body>
</html>

I cant recall where i got the original flags from, i believe they were in a random zip file on my old PC, if you've created the flags, please reach out..
