import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as create_component, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, r as claim_component, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './index.3ca71bc2.js';
import { G as GradientHeading } from './GradientHeading.59773c66.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

// (154:2) <GradientHeading depth={2}>
function create_default_slot(ctx) {
	let t0;
	let br;
	let t1;

	const block = {
		c: function create() {
			t0 = text("My\n    ");
			br = element("br");
			t1 = text("\n    work");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "My\n    ");
			br = claim_element(nodes, "BR", {});
			t1 = claim_text(nodes, "\n    work");
			this.h();
		},
		h: function hydrate() {
			add_location(br, file, 155, 4, 2967);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, br, anchor);
			insert_dev(target, t1, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(br);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(154:2) <GradientHeading depth={2}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let header;
	let a;
	let img0;
	let img0_src_value;
	let t1;
	let aside;
	let h10;
	let t2;
	let t3;
	let h2;
	let t4;
	let t5;
	let div0;
	let h11;
	let span;
	let t6;
	let t7;
	let br;
	let t8;
	let t9;
	let p;
	let t10;
	let t11;
	let figure0;
	let img1;
	let img1_src_value;
	let t12;
	let img2;
	let img2_src_value;
	let t13;
	let div1;
	let figure1;
	let t14;
	let figure2;
	let img3;
	let img3_src_value;
	let t15;
	let main;
	let current;

	const gradientheading = new GradientHeading({
			props: {
				depth: 2,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			header = element("header");
			a = element("a");
			img0 = element("img");
			t1 = space();
			aside = element("aside");
			h10 = element("h1");
			t2 = text("Mohammed Mulazada");
			t3 = space();
			h2 = element("h2");
			t4 = text("Front-end Developer");
			t5 = space();
			div0 = element("div");
			h11 = element("h1");
			span = element("span");
			t6 = text("Welcome");
			t7 = space();
			br = element("br");
			t8 = text("\n      to my portfolio");
			t9 = space();
			p = element("p");
			t10 = text("I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\n      passion for all things web, I am looking for challenges and new things to\n      learn each and every day.");
			t11 = space();
			figure0 = element("figure");
			img1 = element("img");
			t12 = space();
			img2 = element("img");
			t13 = space();
			div1 = element("div");
			figure1 = element("figure");
			t14 = space();
			figure2 = element("figure");
			img3 = element("img");
			t15 = space();
			main = element("main");
			create_component(gradientheading.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			a = claim_element(header_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			img0 = claim_element(a_nodes, "IMG", { src: true, alt: true });
			t1 = claim_space(a_nodes);
			aside = claim_element(a_nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			h10 = claim_element(aside_nodes, "H1", {});
			var h10_nodes = children(h10);
			t2 = claim_text(h10_nodes, "Mohammed Mulazada");
			h10_nodes.forEach(detach_dev);
			t3 = claim_space(aside_nodes);
			h2 = claim_element(aside_nodes, "H2", {});
			var h2_nodes = children(h2);
			t4 = claim_text(h2_nodes, "Front-end Developer");
			h2_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t5 = claim_space(header_nodes);
			div0 = claim_element(header_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h11 = claim_element(div0_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			span = claim_element(h11_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t6 = claim_text(span_nodes, "Welcome");
			span_nodes.forEach(detach_dev);
			t7 = claim_space(h11_nodes);
			br = claim_element(h11_nodes, "BR", {});
			t8 = claim_text(h11_nodes, "\n      to my portfolio");
			h11_nodes.forEach(detach_dev);
			t9 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t10 = claim_text(p_nodes, "I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\n      passion for all things web, I am looking for challenges and new things to\n      learn each and every day.");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t11 = claim_space(header_nodes);
			figure0 = claim_element(header_nodes, "FIGURE", { class: true });
			var figure0_nodes = children(figure0);
			img1 = claim_element(figure0_nodes, "IMG", { class: true, alt: true, src: true });
			t12 = claim_space(figure0_nodes);
			img2 = claim_element(figure0_nodes, "IMG", { class: true, alt: true, src: true });
			figure0_nodes.forEach(detach_dev);
			t13 = claim_space(header_nodes);
			div1 = claim_element(header_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			figure1 = claim_element(div1_nodes, "FIGURE", { class: true });
			children(figure1).forEach(detach_dev);
			t14 = claim_space(div1_nodes);
			figure2 = claim_element(div1_nodes, "FIGURE", { class: true });
			var figure2_nodes = children(figure2);
			img3 = claim_element(figure2_nodes, "IMG", { alt: true, src: true });
			figure2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(gradientheading.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Home | Portfolio of Mohammed Mulazada";
			if (img0.src !== (img0_src_value = "mo_logo.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "logo from moniac");
			add_location(img0, file, 120, 4, 2005);
			add_location(h10, file, 122, 6, 2096);
			add_location(h2, file, 123, 6, 2129);
			attr_dev(aside, "class", "text-white pl-4");
			add_location(aside, file, 121, 4, 2058);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "logo_container px-10 mt-10 svelte-1799krt");
			add_location(a, file, 119, 2, 1953);
			attr_dev(span, "class", "font-bold text-6xl");
			add_location(span, file, 128, 6, 2267);
			add_location(br, file, 129, 6, 2321);
			attr_dev(h11, "class", "text-4xl leading-none mb-4");
			add_location(h11, file, 127, 4, 2221);
			attr_dev(p, "class", "max-w-lg");
			add_location(p, file, 132, 4, 2364);
			attr_dev(div0, "class", "px-10 intro text-white svelte-1799krt");
			add_location(div0, file, 126, 2, 2180);
			attr_dev(img1, "class", "wave1 svelte-1799krt");
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "g/wave1.png")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file, 140, 4, 2624);
			attr_dev(img2, "class", "wave2 svelte-1799krt");
			attr_dev(img2, "alt", "");
			if (img2.src !== (img2_src_value = "wave2.svg")) attr_dev(img2, "src", img2_src_value);
			add_location(img2, file, 141, 4, 2675);
			attr_dev(figure0, "class", "waves svelte-1799krt");
			add_location(figure0, file, 139, 2, 2597);
			attr_dev(figure1, "class", "square svelte-1799krt");
			add_location(figure1, file, 145, 4, 2767);
			attr_dev(img3, "alt", "");
			if (img3.src !== (img3_src_value = "./triangle.svg")) attr_dev(img3, "src", img3_src_value);
			add_location(img3, file, 147, 6, 2829);
			attr_dev(figure2, "class", "triangle svelte-1799krt");
			add_location(figure2, file, 146, 4, 2797);
			attr_dev(div1, "class", "figure-holder svelte-1799krt");
			add_location(div1, file, 144, 2, 2735);
			attr_dev(header, "class", "h-full svelte-1799krt");
			add_location(header, file, 118, 0, 1927);
			attr_dev(main, "class", "px-10 py-16");
			add_location(main, file, 152, 0, 2899);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, a);
			append_dev(a, img0);
			append_dev(a, t1);
			append_dev(a, aside);
			append_dev(aside, h10);
			append_dev(h10, t2);
			append_dev(aside, t3);
			append_dev(aside, h2);
			append_dev(h2, t4);
			append_dev(header, t5);
			append_dev(header, div0);
			append_dev(div0, h11);
			append_dev(h11, span);
			append_dev(span, t6);
			append_dev(h11, t7);
			append_dev(h11, br);
			append_dev(h11, t8);
			append_dev(div0, t9);
			append_dev(div0, p);
			append_dev(p, t10);
			append_dev(header, t11);
			append_dev(header, figure0);
			append_dev(figure0, img1);
			append_dev(figure0, t12);
			append_dev(figure0, img2);
			append_dev(header, t13);
			append_dev(header, div1);
			append_dev(div1, figure1);
			append_dev(div1, t14);
			append_dev(div1, figure2);
			append_dev(figure2, img3);
			insert_dev(target, t15, anchor);
			insert_dev(target, main, anchor);
			mount_component(gradientheading, main, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const gradientheading_changes = {};

			if (dirty & /*$$scope*/ 1) {
				gradientheading_changes.$$scope = { dirty, ctx };
			}

			gradientheading.$set(gradientheading_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(gradientheading.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(gradientheading.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(header);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(main);
			destroy_component(gradientheading);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzQ2Mzk1ODYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBSb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvUm93LnN2ZWx0ZVwiO1xuICBpbXBvcnQgR3JhZGllbnRIZWFkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0dyYWRpZW50SGVhZGluZy5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzAxMDIyMCAwJSwgIzAwMDAwMCAxMDAlKTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAud2F2ZTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiB3YXZlIDRzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB9XG5cbiAgLndhdmUyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFuaW1hdGlvbjogd2F2ZSAycyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZSwgaHVlIDVzIGVhc2UgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICB9XG5cbiAgLmludHJvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMCU7XG4gIH1cblxuICAuZmlndXJlLWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMCU7XG4gICAgdG9wOiAzMCU7XG4gIH1cblxuICAuc3F1YXJlIHtcbiAgICBoZWlnaHQ6IDgycHg7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgOHMgbGluZWFyIGluZmluaXRlO1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgfVxuXG4gIC50cmlhbmdsZSB7XG4gIH1cblxuICAud2F2ZXMge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG4gIC5sb2dvX2NvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogNTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgOmdsb2JhbCgubG9nb19jb250YWluZXIgPiBpbWcpIHtcbiAgICBtYXgtaGVpZ2h0OiA1MnB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA4MCUsIDAlIDEwMCUpO1xuICAgIH1cblxuICAgIC5pbnRybyB7XG4gICAgICBib3R0b206IDUwJTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgaHVlIHtcbiAgICBmcm9tIHtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZSgtMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHdhdmUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgIC53YXZlMSxcbiAgICAud2F2ZTIsXG4gICAgLnNxdWFyZSB7XG4gICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5Ib21lIHwgUG9ydGZvbGlvIG9mIE1vaGFtbWVkIE11bGF6YWRhPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoZWFkZXIgY2xhc3M9XCJoLWZ1bGxcIj5cbiAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImxvZ29fY29udGFpbmVyIHB4LTEwIG10LTEwXCI+XG4gICAgPGltZyBzcmM9XCJtb19sb2dvLnN2Z1wiIGFsdD1cImxvZ28gZnJvbSBtb25pYWNcIiAvPlxuICAgIDxhc2lkZSBjbGFzcz1cInRleHQtd2hpdGUgcGwtNFwiPlxuICAgICAgPGgxPk1vaGFtbWVkIE11bGF6YWRhPC9oMT5cbiAgICAgIDxoMj5Gcm9udC1lbmQgRGV2ZWxvcGVyPC9oMj5cbiAgICA8L2FzaWRlPlxuICA8L2E+XG4gIDxkaXYgY2xhc3M9XCJweC0xMCBpbnRybyB0ZXh0LXdoaXRlXCI+XG4gICAgPGgxIGNsYXNzPVwidGV4dC00eGwgbGVhZGluZy1ub25lIG1iLTRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtNnhsXCI+V2VsY29tZTwvc3Bhbj5cbiAgICAgIDxiciAvPlxuICAgICAgdG8gbXkgcG9ydGZvbGlvXG4gICAgPC9oMT5cbiAgICA8cCBjbGFzcz1cIm1heC13LWxnXCI+XG4gICAgICBJIGFtIE1vaGFtbWVkIE11bGF6YWRhLCBhIEZyb250LUVuZCBEZXZlbG9wZXIgYmFzZWQgaW4gQW1zdGVyZGFtLiBXaXRoIGFcbiAgICAgIHBhc3Npb24gZm9yIGFsbCB0aGluZ3Mgd2ViLCBJIGFtIGxvb2tpbmcgZm9yIGNoYWxsZW5nZXMgYW5kIG5ldyB0aGluZ3MgdG9cbiAgICAgIGxlYXJuIGVhY2ggYW5kIGV2ZXJ5IGRheS5cbiAgICA8L3A+XG4gIDwvZGl2PlxuXG4gIDxmaWd1cmUgY2xhc3M9XCJ3YXZlc1wiPlxuICAgIDxpbWcgY2xhc3M9XCJ3YXZlMVwiIGFsdD1cIlwiIHNyYz1cIndhdmUxLnBuZ1wiIC8+XG4gICAgPGltZyBjbGFzcz1cIndhdmUyXCIgYWx0PVwiXCIgc3JjPVwid2F2ZTIuc3ZnXCIgLz5cbiAgPC9maWd1cmU+XG5cbiAgPGRpdiBjbGFzcz1cImZpZ3VyZS1ob2xkZXJcIj5cbiAgICA8ZmlndXJlIGNsYXNzPVwic3F1YXJlXCIgLz5cbiAgICA8ZmlndXJlIGNsYXNzPVwidHJpYW5nbGVcIj5cbiAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiLi90cmlhbmdsZS5zdmdcIiAvPlxuICAgIDwvZmlndXJlPlxuICA8L2Rpdj5cbjwvaGVhZGVyPlxuXG48bWFpbiBjbGFzcz1cInB4LTEwIHB5LTE2XCI+XG4gIDxHcmFkaWVudEhlYWRpbmcgZGVwdGg9ezJ9PlxuICAgIE15XG4gICAgPGJyIC8+XG4gICAgd29ya1xuICA8L0dyYWRpZW50SGVhZGluZz5cbjwvbWFpbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXlKMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
