TASKS = {
    1: {
        'title': 'Simple landing page',
        'task': 'Create a landing page following the given design (Figma).\n'
                'Requirements:\n'
                '   •	Use of semantic tags (<header>, <nav>, <ul>, <footer>, etc.) wherever is necessary \n'
                '   •	All fonts, colour palette, elements sizes must strictly match the design.\n'
                '   •	Pixel perfect is also not required, BUT your website should visually match the design template (i.e. If the element is horizontally centred on the design, it should look centred on the website)\n'
                '   •	All class names must not be meaningless (i.e. class=”myClass”) and should follow the same naming convention, preferably BEM, but you could come up with your own (just be consistent)\n'
                '   •	Basic cross-browser support (website should look correctly on last versions of modern browsers (Chrome, Safari, Edge)\n'
                '   •	For now, responsiveness is not required.\n\n'
                'P.S If your semester project has a landing website that satisfies the requirements, then you could skip this work by bringing your website for an assessment.\n'
                'Note: The above goes only for those students. who were actually responsible for the website development. The whole team cannot use the right to skip this work!'
    },
    2: {
        'title': 'Advanced landing',
        'task': 'Improve a landing page following the given design (same as previous) by adding full responsiveness and some animation.\n'
                'Requirements:\n'
                '   •	The website should be partly responsive:  Required: for 320px (iPhone 5s)  2560px (4K screens).  Hint: for extra-large screen width, you can just fit website content inside a previously set container for the regular screen width and centre it horizontally.\n'
                '   •	The header should collapse to a hamburger on small screens\n'
                '   •	The website must contain animations (at least 3). Can be made in any possible way, preferably with css properties (animation/transition).\n'
                '   •	Your project should be logically structured (all your CSS can’t be in just one-two files)\n'
                '   •	All of the previous work requirements must be kept.'
    },
    3: {
        'title': 'CRUD Javascript App: View Page',
        'task': 'In this work, you have to make a simple presentation part of a website - View Page (You can find the template of the page by following the link - https://wireframepro.mockflow.com/view/lviv-iot-crud-js-app  For your blocks you must use data from your java/python project class.\n\n'
                'In case you don’t have a data from previous year, you should choose any free task from this link: \n'
                'https://docs.google.com/document/d/1RW9PpalOlHn-nVIi8kbCr71vu_XLNsjj4TKpTdBnZ-w/edit?usp=sharing\n\n'
                'Then using JavaScript, you need to implement the following operations on your data (it is up to you to decide which field should be used for each of the operations): \n'
                '   •	Sort of your items option\n'
                '   •	Search option \n'
                '   •	Count total amount of some of the field  (e.g total price of all cars)\n'
                'Requirements:\n'
                '   •	Responsiveness absolutely not required.\n'
                '   •	Styling is not important at all. Is up to you.\n'
                'Our recommendations and tips:\n'
                '   •	use JS Array methods: map(), sort(), filter(), reduce()\n'
                '   •	use native JS for any DOM operations (querySelector | findById | insertAdjacentHTML | etc)\n'
                '   •	a website example from live coding\n'
                '   •	Working with DOM & JS Array methods project https://github.com/bradtraversy/vanillawebprojects/tree/master/dom-array-methods\n'
                '   •	useful projects examples'
    },
    4: {
        'title': 'CRUD Javascript App: Create/Edit Pages',
        'task': 'In this work, you need to continue working and add two new parts to your website - Create & Edit Pages (You can find the template of these pages by following the link)\n\n'
                'Update/Delete operations are not required for this work!\n'
                'Also you must validate the forms using HTML attributes (inputs must be configured for your data format).\n'
                'If incorrect data is entered in the inputs, you must use JavaScript to inform the user with modal windows or just plain alert() function.  Bonus points are provided for this work, if you implement a styled modal window that will work with JavaScript.'
    },
    5: {
        'title': 'CRUD Javascript App: Backend',
        'task': 'In the last part of working on the website you have to implement all Create/Read/Update/Delete operations which must be made via the corresponding HTTP methods in your REST API.\n\n'
                'Important. You don\'t have to make a backend from the beginning - connect an existing one that you worked on in the first year.\n'
                'If you don’t have a backend server, you should create a new REST API using any preferred technology.'
    },
    6: {
        'title': 'React.js: Home page',
        'task': "Start creating your React App with a simple Home page (see the link to wireframe above). Your e-commerce app subject is about your entities from previous (3-5) works.\n\n"
                "Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)"},
    7: {
        'title': 'React.js: Catalog page',
        'task': 'Continue work on your React App by adding a page with Items list (see the link to wireframe of Catalog page above).'
    },
    8: {
        'title': 'React.js: Item page',
        'task': 'Continue work on your React App by adding a page for  your Item (see the link to wireframe of Item page above). Also, now, you have to make all your previous pages (Home & Catalog) more interactive.\n\n'
                'Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)'
    },
    9: {
        'title': 'React.js: Connecting to REST API',
        'task': 'Finally! Now, you are about to put a final touches on all pages you created - implement interaction with your REST API server.\n\n'
                'Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)\n'
                'Backend - just as discussed before, can be the one you used for your 3-5 work or a new one created from scratch. Tech stack - absolutely up to you.'
    },
    10: {
        'title': 'React.js: Redux: Cart page (shopping cart)',
        'task': 'You are on your way to finishing this insane project… Create the first of three cart pages - Shopping cart page.\n'
                'Also, here you meet one of the most popular React library - Redux.'
    },
    11: {
        'title': 'React.js: Formik: Cart page (Checkout & Success)',
        'task': 'Finish your project by creating the last of three cart pages - Checkout & Success pages.\n'
                'As a bonus, you will learn a very handy and powerful form validation library - Formik.'
    },
}

IGNORE = ['.gitignore', 'README.md', 'package-lock.json', 'package.json', 'reportWebVitals.js', 'node_modules']
IGNORE_FORMAT = ['.jpeg', '.svg', '.png', '.jpg']
