#!/bin/bash

# welcome
echo ""
echo "  CREATOR packer"
echo " ----------------"
echo ""
echo "  Requirements:"
echo "  * terser, colors, yargs, readline-sync"
npm install terser jshint colors yargs readline-sync
echo ""
if [ $# -gt 0 ]; then
     set -x
fi


# skeleton
echo "  Packing:"
echo "  * min.creator_web.js..."
cat components/creator_uielto_navbar.js\
    components/creator_uielto_highlights.js\
    components/creator_uielto_help_menu.js\
    components/creator_uielto_tutorial_card.js\
    components/creator_uielto_faq.js\
    components/creator_uielto_browsers.js\
    components/creator_uielto_publication.js\
    components/creator_uielto_timeline.js\
    components/creator_uielto_about.js\
    components/creator_uielto_author.js\
    \
    js/creator_ga.js \
    \
    js/app.js > js/creator_web.js
terser -o js/min.creator_web.js js/creator_web.js
rm -fr js/creator_web.js

# the end
echo ""
echo "  CREATOR packed (if no error was shown)."
echo ""