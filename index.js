import chalk from "chalk";
import conclean from "conclean";

/**
 * Displays a styled welcome message in the CLI.
 *
 * @param {Object} options - Configurable options.
 * @param {string} [options.title="ADD A HEADING"] - Heading text.
 * @param {string} [options.tagLine=""] - Subheading text.
 * @param {string} [options.description=""] - Description text.
 * @param {string} [options.bgColor="#ffffff"] - Background color (hex).
 * @param {string} [options.color="#000000"] - Text color (hex).
 * @param {boolean} [options.bold=true] - Whether text should be bold.
 * @param {boolean} [options.clear=true] - Whether to clear the console before displaying.
 * @param {string} [options.version=""] - Version number.
 */
export default function conwelcome({
	title = "ADD A HEADING",
	tagLine = "",
	description = "",
	bgColor = "#ffffff",
	color = "#000000",
	bold = true,
	clear = true,
	version = "",
} = {}) {
	// Clear console if enabled
	if (clear) conclean();

	// Create styled text
	const bg = bold ? chalk.hex(bgColor).inverse.bold : chalk.hex(bgColor).inverse;
	const clr = bold ? chalk.hex(color).bold : chalk.hex(color);

	// Display welcome message
	console.log("\n" + clr(`${bg(` ${title} `)}`) + (version ? ` v${version}` : "") + ` ${chalk.dim(tagLine)}`);
	if (description) console.log(chalk.dim(description));
	console.log();
}
