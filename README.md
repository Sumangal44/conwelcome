# conwelcome



> 🚀Welcome header for Node.js CLI software.👨‍🏭

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install conwelcome
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
import welcome from "conwelcome";

// Use it.
welcome({title: `Welcome CLI`, tagLine: `by sumangal karan` });

// OR with all the options set like this:
welcome({
	title: `Welcome CLI`,
	tagLine: `by sumangal karan`,
	description: `Welcome to the best CLI tool you'll ever use!`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `v1.0`
});
```


<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### welcome(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

#### ❯ title

Type: `string`

CLI title with background color highlight.

#### ❯ tagLine

Type: `string`

CLI tag line in front of the title without highlight but dimmed.

#### ❯ description

Type: `string`

CLI description below the title.

#### clear

Type: `boolean`<br>
Default: `true`

Clear console.

#### bold

Type: `boolean`<br>
Default: `true`

Bold heading text.

#### bgColor

Type: `string`<br>
Default: `#ffffff`

Background color highlight for `heading`.

#### color

Type: `string`<br>
Default: `true`

Text color for `heading`.

#### version

Type: `string`<br>
Default: `(empty string)`

Print version text.

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `✅ TEST`


</small>

## License & Conduct

[❯ Read the license here →](license)




