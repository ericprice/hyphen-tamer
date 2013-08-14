# Hyphen Tamer

Many style guides specify strict rules around what can and cannot be hyphenated. Proper nouns in particular are often ruled out, so given a container element, this jQuery plugin prevents capitalized words from being hyphenated by the CSS `hyphens` property.

### Usage

```javascript
$('.hyphenated-text').tame({
    appliedClass: 'no-hyphenation'
});
```

### Limitations

* Words that appear at the beginning of a sentence, naturally capitalized despite not always being proper nouns, will not be allowed to hyphenate when this plugin is used.
* Uncapitalized proper nouns (e.g. “e.e. cummings”) may still hyphenate.
