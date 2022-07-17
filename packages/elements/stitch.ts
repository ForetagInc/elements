interface Parameters<Props, Propless> {
	base?: string,
	variants?: Propless extends null ? Partial<{ [Key in keyof Props]: Props[Key] extends string | undefined ? Partial<{ [Value in Extract<Props[Key], string>]: string }> : string }> : Propless,
	compounds?: Array<[Partial<Propless extends null ? Props : { [Key in keyof Propless]: Propless[Key] extends object ? keyof Propless[Key] : boolean }>, string]>,
}

const stitchtail = <Props = null, Propless = null>({ base, variants, compounds }: Parameters<Props, Propless>) => {
	return (props?: Partial<Propless extends null ? Props : { [Key in keyof Propless]: Propless[Key] extends object ? keyof Propless[Key] : boolean }>) => {
		const classes = base ? [...base.split(" ")] : [];

		if (props) {
			if (variants) {
				Object.entries(props).forEach(([key, value]) => {
					const vari: unknown = variants as unknown;

					if (typeof variants[key as keyof typeof variants] === "string" && value === true) {
						classes.push(...(variants[key as keyof typeof variants] as string).split(" "));
					} else if (typeof variants[key as keyof typeof variants] === "object" && variants[key as keyof typeof variants][value as keyof { [key in keyof typeof vari]: typeof variants[key] }]) {
						classes.push(...(variants[key as keyof typeof variants][value as keyof { [key in keyof typeof vari]: typeof variants[key] }] as string).split(" "));
					}
				});
			}

			if (compounds) {
				for (let i = 0; i < compounds.length; i++) {
					const entries = Object.entries(compounds[i][0]);
					let matches = 0;

					entries.forEach(([key, value]) => {
						props[key as keyof typeof props] === value && matches++;
					});

					if (entries.length === matches) {
						classes.push(...compounds[i][1].split(" "));
					}
				}
			}
		}

		return classes.filter(value => value.length > 0).join(" ").trim();
	};
};

export { stitchtail as default };