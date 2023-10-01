
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #b61807 
		"--color-primary-50": "244 220 218", // #f4dcda
		"--color-primary-100": "240 209 205", // #f0d1cd
		"--color-primary-200": "237 197 193", // #edc5c1
		"--color-primary-300": "226 163 156", // #e2a39c
		"--color-primary-400": "204 93 81", // #cc5d51
		"--color-primary-500": "182 24 7", // #b61807
		"--color-primary-600": "164 22 6", // #a41606
		"--color-primary-700": "137 18 5", // #891205
		"--color-primary-800": "109 14 4", // #6d0e04
		"--color-primary-900": "89 12 3", // #590c03
		// secondary | #050505 
		"--color-secondary-50": "218 218 218", // #dadada
		"--color-secondary-100": "205 205 205", // #cdcdcd
		"--color-secondary-200": "193 193 193", // #c1c1c1
		"--color-secondary-300": "155 155 155", // #9b9b9b
		"--color-secondary-400": "80 80 80", // #505050
		"--color-secondary-500": "5 5 5", // #050505
		"--color-secondary-600": "5 5 5", // #050505
		"--color-secondary-700": "4 4 4", // #040404
		"--color-secondary-800": "3 3 3", // #030303
		"--color-secondary-900": "2 2 2", // #020202
		// tertiary | #9b715f 
		"--color-tertiary-50": "240 234 231", // #f0eae7
		"--color-tertiary-100": "235 227 223", // #ebe3df
		"--color-tertiary-200": "230 220 215", // #e6dcd7
		"--color-tertiary-300": "215 198 191", // #d7c6bf
		"--color-tertiary-400": "185 156 143", // #b99c8f
		"--color-tertiary-500": "155 113 95", // #9b715f
		"--color-tertiary-600": "140 102 86", // #8c6656
		"--color-tertiary-700": "116 85 71", // #745547
		"--color-tertiary-800": "93 68 57", // #5d4439
		"--color-tertiary-900": "76 55 47", // #4c372f
		// success | #03fc20 
		"--color-success-50": "217 255 222", // #d9ffde
		"--color-success-100": "205 254 210", // #cdfed2
		"--color-success-200": "192 254 199", // #c0fec7
		"--color-success-300": "154 254 166", // #9afea6
		"--color-success-400": "79 253 99", // #4ffd63
		"--color-success-500": "3 252 32", // #03fc20
		"--color-success-600": "3 227 29", // #03e31d
		"--color-success-700": "2 189 24", // #02bd18
		"--color-success-800": "2 151 19", // #029713
		"--color-success-900": "1 123 16", // #017b10
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #ff0000 
		"--color-error-50": "255 217 217", // #ffd9d9
		"--color-error-100": "255 204 204", // #ffcccc
		"--color-error-200": "255 191 191", // #ffbfbf
		"--color-error-300": "255 153 153", // #ff9999
		"--color-error-400": "255 77 77", // #ff4d4d
		"--color-error-500": "255 0 0", // #ff0000
		"--color-error-600": "230 0 0", // #e60000
		"--color-error-700": "191 0 0", // #bf0000
		"--color-error-800": "153 0 0", // #990000
		"--color-error-900": "125 0 0", // #7d0000
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}
