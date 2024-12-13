import{c as r,j as e,m as s}from"./index-D0wx3I60.js";import{u as c}from"./index-1sy41hM0.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),x=()=>{const[i,t]=c({triggerOnce:!0,threshold:.1}),n=[{season:"Summer Vacation",duration:"May 18, 2024 - June 17, 2024",description:"School reopens on July 18, 2024"},{season:"Puja Vacation",duration:"October 6, 2024 - October 17, 2024",description:"School reopens on October 18, 2024"},{season:"Winter Vacation",duration:"December 21, 2024 - January 5, 2024",description:"School reopens on January 6, 2025"}];return e.jsx("section",{ref:i,className:"py-20 bg-gradient-to-b from-[#2D1B69] to-[#0C0C0C]",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(s.div,{initial:{y:20,opacity:0},animate:t?{y:0,opacity:1}:{},transition:{duration:.8},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Academic Calendar"}),e.jsx("div",{className:"w-20 h-1 bg-purple-500 mx-auto"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map((a,o)=>e.jsx(s.div,{initial:{y:50,opacity:0},animate:t?{y:0,opacity:1}:{},transition:{duration:.8,delay:o*.2},className:"bg-[#1a1a1a] rounded-lg p-6 hover:shadow-xl transition-shadow",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-[#4B0082] rounded-full p-3",children:e.jsx(d,{className:"h-6 w-6 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:a.season}),e.jsx("p",{className:"text-purple-300 font-medium mb-2",children:a.duration}),e.jsx("p",{className:"text-gray-400",children:a.description})]})]})},a.season))})]})})};export{x as default};