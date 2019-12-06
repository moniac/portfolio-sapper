import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, n as noop } from './index.e8125902.js';
import './GradientHeading.a350bebe.js';

/* src/routes/index.svelte generated by Svelte v3.16.0 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let header;
	let div0;
	let h1;
	let span;
	let t1;
	let t2;
	let br;
	let t3;
	let t4;
	let p;
	let t5;
	let t6;
	let figure0;
	let img0;
	let img0_src_value;
	let t7;
	let img1;
	let img1_src_value;
	let t8;
	let div1;
	let figure1;

	const block = {
		c: function create() {
			t0 = space();
			header = element("header");
			div0 = element("div");
			h1 = element("h1");
			span = element("span");
			t1 = text("Welcome");
			t2 = space();
			br = element("br");
			t3 = text("\n      to my portfolio");
			t4 = space();
			p = element("p");
			t5 = text("I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\n      passion for all things web, I am looking for challenges and new things to\n      learn each and every day.");
			t6 = space();
			figure0 = element("figure");
			img0 = element("img");
			t7 = space();
			img1 = element("img");
			t8 = space();
			div1 = element("div");
			figure1 = element("figure");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div0 = claim_element(header_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			span = claim_element(h1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, "Welcome");
			span_nodes.forEach(detach_dev);
			t2 = claim_space(h1_nodes);
			br = claim_element(h1_nodes, "BR", {});
			t3 = claim_text(h1_nodes, "\n      to my portfolio");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, "I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\n      passion for all things web, I am looking for challenges and new things to\n      learn each and every day.");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(header_nodes);
			figure0 = claim_element(header_nodes, "FIGURE", { class: true });
			var figure0_nodes = children(figure0);
			img0 = claim_element(figure0_nodes, "IMG", { class: true, alt: true, src: true });
			t7 = claim_space(figure0_nodes);
			img1 = claim_element(figure0_nodes, "IMG", { class: true, alt: true, src: true });
			figure0_nodes.forEach(detach_dev);
			t8 = claim_space(header_nodes);
			div1 = claim_element(header_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			figure1 = claim_element(div1_nodes, "FIGURE", { class: true });
			children(figure1).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Home | Portfolio of Mohammed Mulazada";
			attr_dev(span, "class", "font-bold text-6xl");
			add_location(span, file, 109, 6, 1870);
			add_location(br, file, 110, 6, 1924);
			attr_dev(h1, "class", "text-4xl leading-none mb-4");
			add_location(h1, file, 108, 4, 1824);
			attr_dev(p, "class", "max-w-lg");
			add_location(p, file, 113, 4, 1967);
			attr_dev(div0, "class", "px-10 intro text-white svelte-k78wli");
			add_location(div0, file, 107, 2, 1783);
			attr_dev(img0, "class", "wave1 svelte-k78wli");
			attr_dev(img0, "alt", "");
			if (img0.src !== (img0_src_value = "wave1.svg")) attr_dev(img0, "src", img0_src_value);
			add_location(img0, file, 121, 4, 2227);
			attr_dev(img1, "class", "wave2 svelte-k78wli");
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "wave2.svg")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file, 122, 4, 2276);
			attr_dev(figure0, "class", "waves svelte-k78wli");
			add_location(figure0, file, 120, 2, 2200);
			attr_dev(figure1, "class", "square svelte-k78wli");
			add_location(figure1, file, 126, 4, 2368);
			attr_dev(div1, "class", "figure-holder svelte-k78wli");
			add_location(div1, file, 125, 2, 2336);
			attr_dev(header, "class", "h-full svelte-k78wli");
			add_location(header, file, 105, 0, 1756);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, div0);
			append_dev(div0, h1);
			append_dev(h1, span);
			append_dev(span, t1);
			append_dev(h1, t2);
			append_dev(h1, br);
			append_dev(h1, t3);
			append_dev(div0, t4);
			append_dev(div0, p);
			append_dev(p, t5);
			append_dev(header, t6);
			append_dev(header, figure0);
			append_dev(figure0, img0);
			append_dev(figure0, t7);
			append_dev(figure0, img1);
			append_dev(header, t8);
			append_dev(header, div1);
			append_dev(div1, figure1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(header);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTJkOWMyNjQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
