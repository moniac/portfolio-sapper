import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as create_component, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, r as claim_component, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './index.3ca71bc2.js';
import { G as GradientHeading } from './GradientHeading.59773c66.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

// (203:2) <GradientHeading depth={2}>
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
			add_location(br, file, 204, 4, 3715);
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
		source: "(203:2) <GradientHeading depth={2}>",
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
	let figure3;
	let img4;
	let img4_src_value;
	let t16;
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
			figure3 = element("figure");
			img4 = element("img");
			t16 = space();
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
			t15 = claim_space(div1_nodes);
			figure3 = claim_element(div1_nodes, "FIGURE", { class: true });
			var figure3_nodes = children(figure3);
			img4 = claim_element(figure3_nodes, "IMG", { alt: true, src: true });
			figure3_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
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
			add_location(img0, file, 166, 4, 2669);
			add_location(h10, file, 168, 6, 2760);
			add_location(h2, file, 169, 6, 2793);
			attr_dev(aside, "class", "text-white pl-4");
			add_location(aside, file, 167, 4, 2722);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "logo_container px-10 mt-10 svelte-1b8lkru");
			add_location(a, file, 165, 2, 2617);
			attr_dev(span, "class", "font-bold text-6xl");
			add_location(span, file, 174, 6, 2931);
			add_location(br, file, 175, 6, 2985);
			attr_dev(h11, "class", "text-4xl leading-none mb-4");
			add_location(h11, file, 173, 4, 2885);
			attr_dev(p, "class", "max-w-lg");
			add_location(p, file, 178, 4, 3028);
			attr_dev(div0, "class", "px-10 intro text-white svelte-1b8lkru");
			add_location(div0, file, 172, 2, 2844);
			attr_dev(img1, "class", "wave1 svelte-1b8lkru");
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "g/wave1.png")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file, 186, 4, 3288);
			attr_dev(img2, "class", "wave2 svelte-1b8lkru");
			attr_dev(img2, "alt", "");
			if (img2.src !== (img2_src_value = "wave2.svg")) attr_dev(img2, "src", img2_src_value);
			add_location(img2, file, 187, 4, 3339);
			attr_dev(figure0, "class", "waves svelte-1b8lkru");
			add_location(figure0, file, 185, 2, 3261);
			attr_dev(figure1, "class", "square svelte-1b8lkru");
			add_location(figure1, file, 191, 4, 3431);
			attr_dev(img3, "alt", "");
			if (img3.src !== (img3_src_value = "./triangle.svg")) attr_dev(img3, "src", img3_src_value);
			add_location(img3, file, 193, 6, 3493);
			attr_dev(figure2, "class", "triangle svelte-1b8lkru");
			add_location(figure2, file, 192, 4, 3461);
			attr_dev(img4, "alt", "");
			if (img4.src !== (img4_src_value = "./polygon.svg")) attr_dev(img4, "src", img4_src_value);
			add_location(img4, file, 196, 6, 3578);
			attr_dev(figure3, "class", "polygon svelte-1b8lkru");
			add_location(figure3, file, 195, 4, 3547);
			attr_dev(div1, "class", "figure-holder svelte-1b8lkru");
			add_location(div1, file, 190, 2, 3399);
			attr_dev(header, "class", "h-full svelte-1b8lkru");
			add_location(header, file, 164, 0, 2591);
			attr_dev(main, "class", "px-10 py-16");
			add_location(main, file, 201, 0, 3647);
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
			append_dev(div1, t15);
			append_dev(div1, figure3);
			append_dev(figure3, img4);
			insert_dev(target, t16, anchor);
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
			if (detaching) detach_dev(t16);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjVkYWQzNGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBSb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvUm93LnN2ZWx0ZVwiO1xuICBpbXBvcnQgR3JhZGllbnRIZWFkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0dyYWRpZW50SGVhZGluZy5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzAxMDIyMCAwJSwgIzAwMDAwMCAxMDAlKTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAud2F2ZTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiB3YXZlIDRzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB9XG5cbiAgLndhdmUyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFuaW1hdGlvbjogd2F2ZSAycyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZSwgaHVlIDVzIGVhc2UgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICB9XG5cbiAgLmludHJvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMCU7XG4gIH1cblxuICAuZmlndXJlLWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMCU7XG4gICAgdG9wOiAzMCU7XG4gIH1cblxuICAuc3F1YXJlIHtcbiAgICBoZWlnaHQ6IDgycHg7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgOHMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICB9XG5cbiAgLnRyaWFuZ2xlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYW5pbWF0aW9uOiBob3ZlciA0cyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgfVxuXG4gIC5wb2x5Z29uIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwMHB4O1xuICAgIHRvcDogMDtcbiAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgfVxuXG4gIC53YXZlcyB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgLmxvZ29fY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA1MnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICA6Z2xvYmFsKC5sb2dvX2NvbnRhaW5lciA+IGltZykge1xuICAgIG1heC1oZWlnaHQ6IDUycHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDgwJSwgMCUgMTAwJSk7XG4gICAgfVxuXG4gICAgLmludHJvIHtcbiAgICAgIGJvdHRvbTogNTAlO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgaG92ZXIge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyByb3RhdGVTdGVwIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG5cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjAlKTtcbiAgICB9XG5cbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDAlKTtcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjAlKTtcbiAgICB9XG5cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoODAlKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwMCUpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBodWUge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKC0zNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgd2F2ZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgLndhdmUxLFxuICAgIC53YXZlMixcbiAgICAuc3F1YXJlIHtcbiAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkhvbWUgfCBQb3J0Zm9saW8gb2YgTW9oYW1tZWQgTXVsYXphZGE8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGhlYWRlciBjbGFzcz1cImgtZnVsbFwiPlxuICA8YSBocmVmPVwiL1wiIGNsYXNzPVwibG9nb19jb250YWluZXIgcHgtMTAgbXQtMTBcIj5cbiAgICA8aW1nIHNyYz1cIm1vX2xvZ28uc3ZnXCIgYWx0PVwibG9nbyBmcm9tIG1vbmlhY1wiIC8+XG4gICAgPGFzaWRlIGNsYXNzPVwidGV4dC13aGl0ZSBwbC00XCI+XG4gICAgICA8aDE+TW9oYW1tZWQgTXVsYXphZGE8L2gxPlxuICAgICAgPGgyPkZyb250LWVuZCBEZXZlbG9wZXI8L2gyPlxuICAgIDwvYXNpZGU+XG4gIDwvYT5cbiAgPGRpdiBjbGFzcz1cInB4LTEwIGludHJvIHRleHQtd2hpdGVcIj5cbiAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCBsZWFkaW5nLW5vbmUgbWItNFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC02eGxcIj5XZWxjb21lPC9zcGFuPlxuICAgICAgPGJyIC8+XG4gICAgICB0byBteSBwb3J0Zm9saW9cbiAgICA8L2gxPlxuICAgIDxwIGNsYXNzPVwibWF4LXctbGdcIj5cbiAgICAgIEkgYW0gTW9oYW1tZWQgTXVsYXphZGEsIGEgRnJvbnQtRW5kIERldmVsb3BlciBiYXNlZCBpbiBBbXN0ZXJkYW0uIFdpdGggYVxuICAgICAgcGFzc2lvbiBmb3IgYWxsIHRoaW5ncyB3ZWIsIEkgYW0gbG9va2luZyBmb3IgY2hhbGxlbmdlcyBhbmQgbmV3IHRoaW5ncyB0b1xuICAgICAgbGVhcm4gZWFjaCBhbmQgZXZlcnkgZGF5LlxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbiAgPGZpZ3VyZSBjbGFzcz1cIndhdmVzXCI+XG4gICAgPGltZyBjbGFzcz1cIndhdmUxXCIgYWx0PVwiXCIgc3JjPVwid2F2ZTEucG5nXCIgLz5cbiAgICA8aW1nIGNsYXNzPVwid2F2ZTJcIiBhbHQ9XCJcIiBzcmM9XCJ3YXZlMi5zdmdcIiAvPlxuICA8L2ZpZ3VyZT5cblxuICA8ZGl2IGNsYXNzPVwiZmlndXJlLWhvbGRlclwiPlxuICAgIDxmaWd1cmUgY2xhc3M9XCJzcXVhcmVcIiAvPlxuICAgIDxmaWd1cmUgY2xhc3M9XCJ0cmlhbmdsZVwiPlxuICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIuL3RyaWFuZ2xlLnN2Z1wiIC8+XG4gICAgPC9maWd1cmU+XG4gICAgPGZpZ3VyZSBjbGFzcz1cInBvbHlnb25cIj5cbiAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiLi9wb2x5Z29uLnN2Z1wiIC8+XG4gICAgPC9maWd1cmU+XG4gIDwvZGl2PlxuPC9oZWFkZXI+XG5cbjxtYWluIGNsYXNzPVwicHgtMTAgcHktMTZcIj5cbiAgPEdyYWRpZW50SGVhZGluZyBkZXB0aD17Mn0+XG4gICAgTXlcbiAgICA8YnIgLz5cbiAgICB3b3JrXG4gIDwvR3JhZGllbnRIZWFkaW5nPlxuPC9tYWluPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTBNMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
