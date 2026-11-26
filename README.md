# MB 360 ELN Workbook

[![Publish Quarto Book to Pages](https://github.com/ccgoller/mb360workbook/actions/workflows/publish-pages.yml/badge.svg)](https://github.com/ccgoller/mb360workbook/actions/workflows/publish-pages.yml)

Live site: https://ccgoller.github.io/mb360workbook/

## Table of Contents

- [Overview](#overview)
- [Chapter Index](#chapter-index)
- [Verify Slides Locally](#verify-slides-locally)
- [Publishing](#publishing)

## Overview

This repository contains a Quarto book for the MB 360 ELN Workbook.

- Book source: `workbook/`
- Quarto config: `workbook/_quarto.yml`
- Rendered output: `workbook/_book/`

## Chapter Index

1. Preface and workbook overview  
   Source: [workbook/index.qmd](workbook/index.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/
2. About the author  
   Source: [workbook/about.qmd](workbook/about.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/about.html
3. Figures index  
   Source: [workbook/figures.qmd](workbook/figures.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/figures.html
4. Module 1: Serial dilution and plating  
   Source: [workbook/module-01.qmd](workbook/module-01.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/module-01.html
5. Module 2: Colony isolation and streaking  
   Source: [workbook/module-02.qmd](workbook/module-02.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/module-02.html
6. Module 3: Growth and biofilm assays  
   Source: [workbook/module-03.qmd](workbook/module-03.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/module-03.html
7. Module 4: Biolog phenotype profiling  
   Source: [workbook/module-04.qmd](workbook/module-04.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/module-04.html
8. Module 5: Cerillo Duet measurements  
   Source: [workbook/module-05.qmd](workbook/module-05.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/module-05.html
9. Module 6: Sequencing workflow  
   Source: [workbook/module-06.qmd](workbook/module-06.qmd)  
   Web: https://ccgoller.github.io/mb360workbook/module-06.html
10. Module 7: Sequencing analysis and interpretation  
    Source: [workbook/module-07.qmd](workbook/module-07.qmd)  
    Web: https://ccgoller.github.io/mb360workbook/module-07.html
11. Module 8: Capstone  
    Source: [workbook/module-08.qmd](workbook/module-08.qmd)  
    Web: https://ccgoller.github.io/mb360workbook/module-08.html
12. References  
    Source: [workbook/references.qmd](workbook/references.qmd)  
    Web: https://ccgoller.github.io/mb360workbook/references.html

## Verify Slides Locally

From the `workbook/` directory of the cloned repository:

- Render the book HTML: `quarto render --to html`
- Render the slide decks into `_book/slides/`: `quarto render slides`
- Preview an individual slide deck while editing: `quarto preview slides/module-01-slides.qmd`
- Open a generated deck from `_book/slides/`, for example `_book/slides/module-01-slides.html`
- The shared accessible RevealJS theme for module decks lives in `workbook/slides/theme-mb360.scss`
- The title slide for every deck is generated from `workbook/slides/title-slide.html` (module title, logo, subtitle, authors); set the module title in each deck's YAML `title`

Quick accessibility/rendering checks for each deck:

- Confirm the first visible slide is the white title slide showing the module title and MB 360 logo
- Tab through links and slide controls to verify visible focus indicators
- Verify dark-background slides keep high-contrast text and informative image alt text

If you want a CI-equivalent full render that includes the downloadable PDF output, install TinyTeX first with `quarto install tinytex --no-prompt`.

## Publishing

GitHub Pages deployment is automated through GitHub Actions using:

- [/.github/workflows/publish-pages.yml](.github/workflows/publish-pages.yml)

The build job renders the book in all configured formats and the slide decks,
then uploads the Pages artifact. A separate deployment job checks that the
uploaded artifact is visible before publishing. If it remains unavailable after
12 checks, the workflow fails explicitly rather than reporting a successful deployment.

## Knowledge Checks

Each module has a nested, unnumbered knowledge-check page with its existing URL.
On the website, select an option and press **Submit answer** for each question.
Feedback and the correct answer appear only after submission; changing the
selection hides the previous feedback until you submit again.

These are client-side practice activities, not secure assessments: answer keys
are discoverable in the HTML source. JavaScript is required for submissions.
PDF, EPUB, and DOCX downloads retain the questions without answer keys or
interactive controls.

Answer positions (one-based) are defined in each knowledge-check page's
HTML-only script metadata. When editing questions, keep those positions aligned
with the options. Render with `quarto render --to html` and confirm all eight
pages have nested navigation, no preselected answers, and feedback that remains
hidden until submission.
