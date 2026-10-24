// Authored daylight for the three reference compositions. The sun direction
// drives the sky, direct light and moving shadow camera together.
const presets={
 mountain:{sun:[-45,38,-60],sunColour:'#fff4e5',sunIntensity:3.0,hemisphere:.42,environment:.34,exposure:1.02,fog:'#718795',near:280,far:1250,turbidity:2.8,clouds:.23},
 urban:{sun:[-48,40,-46],sunColour:'#fff8ed',sunIntensity:3.0,hemisphere:.40,environment:.33,exposure:1.02,fog:'#9aa7ab',near:260,far:900,turbidity:2.6,clouds:.18},
 sand:{sun:[-58,34,-48],sunColour:'#fff0d9',sunIntensity:3.15,hemisphere:.36,environment:.30,exposure:1.0,fog:'#c7b398',near:340,far:1150,turbidity:3.7,clouds:.04}
};
for(const value of Object.values(presets)){Object.freeze(value.sun);Object.freeze(value);}Object.freeze(presets);
export function courseLighting(theme){return presets[theme]||presets.urban;}
