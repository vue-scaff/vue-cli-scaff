// Project Structure
import Ressive from "ressive";

// Vue Core
import Vue from "vue";

// Router
import Router from "vue-router";

// Runtime Vuex
import Vuex from "vuex";

// Language
import I18N from "vue-i18n";

// Engineering
import Engineering from "@scaff/vue-cli-engineering";

// Promise
import Promise from "promise-super";

// Main
import Pie from "./pie";

// Root
const Root = `.${process.cwd()}`;


// Module Export
export default class Scaff
{
	constructor (

		Configure

	)

	{
		return new Pie(

			// Sugar
			Ressive,

			// Dependencies
			{
				Vue,

				Router,

				Vuex,

				I18N,

				Configure,

				Root
			},

			// Engineering
			Engineering,

			// Forged
			Promise

		)
	}
}
