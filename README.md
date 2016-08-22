# meteor-static-pages

Demo project - loading static pages.

This project demonstrates the use of the ```markdown``` package in templates to
support the display of static content by Meteor applications.

To display the markdown content, add ```markdown``` to the packages file, ```.meteor/packages```.

Include markdown (can be mixed with HTML) in a template,

```
<template name="TEMPLATE-NAME">
{{#markdown}}

# Markdown text

Markdown text

{{/markdown}}
</template>
```

Note: Markdown must start at the begining of a line and cannot be indented

## Displaying lists of templates

The ```Template.forEach``` function in the ```aldeed:template-extension``` package can be used to create a
list of all templates (and could be filtered based on parts of the template name).

This has not been fully implemented in this example. Believe that the best way to create a dyamic list of pages
would be to seperatly store metadata about each page in a collection.

