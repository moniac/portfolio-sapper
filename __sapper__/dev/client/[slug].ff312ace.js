import { S as SvelteComponentDev, i as init, d as dispatch_dev, I as globals, s as safe_not_equal, J as onMount, v as validate_slots, e as element, o as text, n as space, p as create_component, q as query_selector_all, a as claim_element, b as children, u as claim_text, f as detach_dev, r as claim_space, w as claim_component, h as add_location, g as attr_dev, x as append_dev, j as insert_dev, y as mount_component, t as transition_in, m as transition_out, z as destroy_component, E as set_data_dev } from './client.6cd45870.js';
import { G as GradientHeading } from './GradientHeading.ee9b01e4.js';

/* src\routes\blog\[slug].svelte generated by Svelte v3.21.0 */

const { console: console_1, document: document_1 } = globals;
const file = "src\\routes\\blog\\[slug].svelte";

// (266:2) <GradientHeading>
function create_default_slot(ctx) {
	let t_value = /*post*/ ctx[0].title + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post*/ 1 && t_value !== (t_value = /*post*/ ctx[0].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(266:2) <GradientHeading>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let style;
	let t0;
	let t1;
	let div1;
	let t2;
	let div0;
	let raw_value = /*post*/ ctx[0].html + "";
	let current;
	document_1.title = title_value = /*post*/ ctx[0].title;

	const gradientheading = new GradientHeading({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			style = element("style");
			t0 = text("code[class*=\"language-\"],\r\n    pre[class*=\"language-\"] {\r\n      color: #f8f8f2;\r\n      background: none;\r\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\r\n      font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\r\n      font-size: 1em;\r\n      text-align: left;\r\n      white-space: pre;\r\n      word-spacing: normal;\r\n      word-break: normal;\r\n      word-wrap: normal;\r\n      line-height: 1.5;\r\n\r\n      -moz-tab-size: 4;\r\n      -o-tab-size: 4;\r\n      tab-size: 4;\r\n\r\n      -webkit-hyphens: none;\r\n      -moz-hyphens: none;\r\n      -ms-hyphens: none;\r\n      hyphens: none;\r\n    }\r\n\r\n    /* Code blocks */\r\n    pre[class*=\"language-\"] {\r\n      padding: 1em;\r\n      margin: 0.5em 0;\r\n      margin-bottom: 1.55rem;\r\n      overflow: auto;\r\n      border-radius: 0.3em;\r\n    }\r\n\r\n    :not(pre) > code[class*=\"language-\"],\r\n    pre[class*=\"language-\"] {\r\n      background: #272822;\r\n    }\r\n\r\n    /* Inline code */\r\n    :not(pre) > code[class*=\"language-\"] {\r\n      padding: 0.1em;\r\n      border-radius: 0.3em;\r\n      white-space: normal;\r\n    }\r\n\r\n    .token.comment,\r\n    .token.prolog,\r\n    .token.doctype,\r\n    .token.cdata {\r\n      color: slategray;\r\n    }\r\n\r\n    .token.punctuation {\r\n      color: #f8f8f2;\r\n    }\r\n\r\n    .namespace {\r\n      opacity: 0.7;\r\n    }\r\n\r\n    .token.property,\r\n    .token.tag,\r\n    .token.constant,\r\n    .token.symbol,\r\n    .token.deleted {\r\n      color: #f92672;\r\n    }\r\n\r\n    .token.boolean,\r\n    .token.number {\r\n      color: #ae81ff;\r\n    }\r\n\r\n    .token.selector,\r\n    .token.attr-name,\r\n    .token.string,\r\n    .token.char,\r\n    .token.builtin,\r\n    .token.inserted {\r\n      color: #a6e22e;\r\n    }\r\n\r\n    .token.operator,\r\n    .token.entity,\r\n    .token.url,\r\n    .language-css .token.string,\r\n    .style .token.string,\r\n    .token.variable {\r\n      color: #f8f8f2;\r\n    }\r\n\r\n    .token.atrule,\r\n    .token.attr-value,\r\n    .token.function,\r\n    .token.class-name {\r\n      color: #e6db74;\r\n    }\r\n\r\n    .token.keyword {\r\n      color: #66d9ef;\r\n    }\r\n\r\n    .token.regex,\r\n    .token.important {\r\n      color: #fd971f;\r\n    }\r\n\r\n    .token.important,\r\n    .token.bold {\r\n      font-weight: bold;\r\n    }\r\n    .token.italic {\r\n      font-style: italic;\r\n    }\r\n\r\n    .token.entity {\r\n      cursor: help;\r\n    }\r\n\r\n    p {\r\n      margin-bottom: 1.55rem;\r\n      font-size: 1.125rem;\r\n    }\r\n\r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4,\r\n    h5,\r\n    h6 {\r\n      /* margin-top: 3.1rem;\r\n      margin-bottom: 1.55rem; */\r\n      font-weight: bold;\r\n    }\r\n\r\n    h1 {\r\n      font-size: 2.375rem;\r\n    }\r\n\r\n    h2 {\r\n      font-size: 2rem;\r\n    }\r\n\r\n    .content > * {\r\n      margin-bottom: 1.55rem;\r\n    }\r\n\r\n    img {\r\n      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n        0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 0px 50px rgba(0, 0, 0, 0.12);\r\n      border-radius: 4px;\r\n      width: 100%;\r\n    }\r\n\r\n    .anchor {\r\n      position: relative;\r\n    }\r\n\r\n    .anchor > svg {\r\n      position: absolute;\r\n      left: 0;\r\n      transform: translateY(85%) translateX(-125%) rotate(-45deg);\r\n      transition: opacity 200ms ease, background-color 200ms ease 100ms;\r\n      opacity: 0;\r\n      background: none;\r\n    }\r\n\r\n    .anchor:hover > svg {\r\n      opacity: 0.75;\r\n      background: gray;\r\n    }");
			t1 = space();
			div1 = element("div");
			create_component(gradientheading.$$.fragment);
			t2 = space();
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-stmhy3\"]", document_1.head);
			style = claim_element(head_nodes, "STYLE", {});
			var style_nodes = children(style);
			t0 = claim_text(style_nodes, "code[class*=\"language-\"],\r\n    pre[class*=\"language-\"] {\r\n      color: #f8f8f2;\r\n      background: none;\r\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\r\n      font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\r\n      font-size: 1em;\r\n      text-align: left;\r\n      white-space: pre;\r\n      word-spacing: normal;\r\n      word-break: normal;\r\n      word-wrap: normal;\r\n      line-height: 1.5;\r\n\r\n      -moz-tab-size: 4;\r\n      -o-tab-size: 4;\r\n      tab-size: 4;\r\n\r\n      -webkit-hyphens: none;\r\n      -moz-hyphens: none;\r\n      -ms-hyphens: none;\r\n      hyphens: none;\r\n    }\r\n\r\n    /* Code blocks */\r\n    pre[class*=\"language-\"] {\r\n      padding: 1em;\r\n      margin: 0.5em 0;\r\n      margin-bottom: 1.55rem;\r\n      overflow: auto;\r\n      border-radius: 0.3em;\r\n    }\r\n\r\n    :not(pre) > code[class*=\"language-\"],\r\n    pre[class*=\"language-\"] {\r\n      background: #272822;\r\n    }\r\n\r\n    /* Inline code */\r\n    :not(pre) > code[class*=\"language-\"] {\r\n      padding: 0.1em;\r\n      border-radius: 0.3em;\r\n      white-space: normal;\r\n    }\r\n\r\n    .token.comment,\r\n    .token.prolog,\r\n    .token.doctype,\r\n    .token.cdata {\r\n      color: slategray;\r\n    }\r\n\r\n    .token.punctuation {\r\n      color: #f8f8f2;\r\n    }\r\n\r\n    .namespace {\r\n      opacity: 0.7;\r\n    }\r\n\r\n    .token.property,\r\n    .token.tag,\r\n    .token.constant,\r\n    .token.symbol,\r\n    .token.deleted {\r\n      color: #f92672;\r\n    }\r\n\r\n    .token.boolean,\r\n    .token.number {\r\n      color: #ae81ff;\r\n    }\r\n\r\n    .token.selector,\r\n    .token.attr-name,\r\n    .token.string,\r\n    .token.char,\r\n    .token.builtin,\r\n    .token.inserted {\r\n      color: #a6e22e;\r\n    }\r\n\r\n    .token.operator,\r\n    .token.entity,\r\n    .token.url,\r\n    .language-css .token.string,\r\n    .style .token.string,\r\n    .token.variable {\r\n      color: #f8f8f2;\r\n    }\r\n\r\n    .token.atrule,\r\n    .token.attr-value,\r\n    .token.function,\r\n    .token.class-name {\r\n      color: #e6db74;\r\n    }\r\n\r\n    .token.keyword {\r\n      color: #66d9ef;\r\n    }\r\n\r\n    .token.regex,\r\n    .token.important {\r\n      color: #fd971f;\r\n    }\r\n\r\n    .token.important,\r\n    .token.bold {\r\n      font-weight: bold;\r\n    }\r\n    .token.italic {\r\n      font-style: italic;\r\n    }\r\n\r\n    .token.entity {\r\n      cursor: help;\r\n    }\r\n\r\n    p {\r\n      margin-bottom: 1.55rem;\r\n      font-size: 1.125rem;\r\n    }\r\n\r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4,\r\n    h5,\r\n    h6 {\r\n      /* margin-top: 3.1rem;\r\n      margin-bottom: 1.55rem; */\r\n      font-weight: bold;\r\n    }\r\n\r\n    h1 {\r\n      font-size: 2.375rem;\r\n    }\r\n\r\n    h2 {\r\n      font-size: 2rem;\r\n    }\r\n\r\n    .content > * {\r\n      margin-bottom: 1.55rem;\r\n    }\r\n\r\n    img {\r\n      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n        0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 0px 50px rgba(0, 0, 0, 0.12);\r\n      border-radius: 4px;\r\n      width: 100%;\r\n    }\r\n\r\n    .anchor {\r\n      position: relative;\r\n    }\r\n\r\n    .anchor > svg {\r\n      position: absolute;\r\n      left: 0;\r\n      transform: translateY(85%) translateX(-125%) rotate(-45deg);\r\n      transition: opacity 200ms ease, background-color 200ms ease 100ms;\r\n      opacity: 0;\r\n      background: none;\r\n    }\r\n\r\n    .anchor:hover > svg {\r\n      opacity: 0.75;\r\n      background: gray;\r\n    }");
			style_nodes.forEach(detach_dev);
			head_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(gradientheading.$$.fragment, div1_nodes);
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(style, file, 87, 2, 2183);
			attr_dev(div0, "class", "content svelte-h6ymk4");
			add_location(div0, file, 267, 2, 5706);
			attr_dev(div1, "class", "container mx-auto max-w-2xl px-4 py-8 lg:py-24 lg:px-8");
			add_location(div1, file, 264, 0, 5581);
		},
		m: function mount(target, anchor) {
			append_dev(document_1.head, style);
			append_dev(style, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div1, anchor);
			mount_component(gradientheading, div1, null);
			append_dev(div1, t2);
			append_dev(div1, div0);
			div0.innerHTML = raw_value;
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*post*/ 1) && title_value !== (title_value = /*post*/ ctx[0].title)) {
				document_1.title = title_value;
			}

			const gradientheading_changes = {};

			if (dirty & /*$$scope, post*/ 3) {
				gradientheading_changes.$$scope = { dirty, ctx };
			}

			gradientheading.$set(gradientheading_changes);
			if ((!current || dirty & /*post*/ 1) && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) div0.innerHTML = raw_value;		},
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
			detach_dev(style);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div1);
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

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();
	console.log(params.slug);

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;
	console.log(post);

	onMount(() => {
		(function () {
			var pre = document.getElementsByTagName("pre"), pl = pre.length;

			for (var i = 0; i < pl; i++) {
				pre[i].innerHTML = "<span class=\"line-number\"></span>" + pre[i].innerHTML + "<span class=\"cl\"></span>";
				var num = pre[i].innerHTML.split(/\n/).length;

				for (var j = 0; j < num - 1; j++) {
					var line_num = pre[i].getElementsByTagName("span")[0];
					line_num.innerHTML += "<span>" + (j + 1) + "</span>";
				}
			}
		})();
	});

	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ preload, onMount, GradientHeading, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmZmMzEyYWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG4gICAgLy8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2VcclxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgYmxvZy8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5zbHVnKTtcclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBHcmFkaWVudEhlYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhZGllbnRIZWFkaW5nLnN2ZWx0ZVwiO1xyXG4gIGV4cG9ydCBsZXQgcG9zdDtcclxuICBjb25zb2xlLmxvZyhwb3N0KTtcclxuXHJcbiAgb25Nb3VudCgoKSA9PiB7XHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBwcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInByZVwiKSxcclxuICAgICAgICBwbCA9IHByZS5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGw7IGkrKykge1xyXG4gICAgICAgIHByZVtpXS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGluZS1udW1iZXJcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICBwcmVbaV0uaW5uZXJIVE1MICtcclxuICAgICAgICAgICc8c3BhbiBjbGFzcz1cImNsXCI+PC9zcGFuPic7XHJcbiAgICAgICAgdmFyIG51bSA9IHByZVtpXS5pbm5lckhUTUwuc3BsaXQoL1xcbi8pLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bSAtIDE7IGorKykge1xyXG4gICAgICAgICAgdmFyIGxpbmVfbnVtID0gcHJlW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKVswXTtcclxuICAgICAgICAgIGxpbmVfbnVtLmlubmVySFRNTCArPSBcIjxzcGFuPlwiICsgKGogKyAxKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICB9KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLypcclxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxyXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cclxuXHRcdEluIHRoaXMgcGFnZSwgU3ZlbHRlIGNhbid0IGtub3cgd2hpY2ggZWxlbWVudHMgYXJlXHJcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXHJcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxyXG5cdFx0YWxsIGVsZW1lbnRzIGluc2lkZSAuY29udGVudFxyXG5cdCovXHJcbiAgLmNvbnRlbnQgOmdsb2JhbChoMikge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICA6Z2xvYmFsKHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkKSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcbiAgOmdsb2JhbCh0YWJsZSkge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgOmdsb2JhbCh0YWJsZSkge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICA6Z2xvYmFsKHRyKSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcblxyXG4gIDpnbG9iYWwodGgpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA6Z2xvYmFsKHRoLCB0ZCkge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcbiAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XHJcbiAgPHN0eWxlPlxyXG4gICAgY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXHJcbiAgICBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcclxuICAgICAgY29sb3I6ICNmOGY4ZjI7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgICAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4gICAgICAtbW96LXRhYi1zaXplOiA0O1xyXG4gICAgICAtby10YWItc2l6ZTogNDtcclxuICAgICAgdGFiLXNpemU6IDQ7XHJcblxyXG4gICAgICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XHJcbiAgICAgIC1tb3otaHlwaGVuczogbm9uZTtcclxuICAgICAgLW1zLWh5cGhlbnM6IG5vbmU7XHJcbiAgICAgIGh5cGhlbnM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29kZSBibG9ja3MgKi9cclxuICAgIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xyXG4gICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgIG1hcmdpbjogMC41ZW0gMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41NXJlbTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgfVxyXG5cclxuICAgIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxyXG4gICAgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogSW5saW5lIGNvZGUgKi9cclxuICAgIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcclxuICAgICAgcGFkZGluZzogMC4xZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC50b2tlbi5jb21tZW50LFxyXG4gICAgLnRva2VuLnByb2xvZyxcclxuICAgIC50b2tlbi5kb2N0eXBlLFxyXG4gICAgLnRva2VuLmNkYXRhIHtcclxuICAgICAgY29sb3I6IHNsYXRlZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4ucHVuY3R1YXRpb24ge1xyXG4gICAgICBjb2xvcjogI2Y4ZjhmMjtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZXNwYWNlIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIC50b2tlbi5wcm9wZXJ0eSxcclxuICAgIC50b2tlbi50YWcsXHJcbiAgICAudG9rZW4uY29uc3RhbnQsXHJcbiAgICAudG9rZW4uc3ltYm9sLFxyXG4gICAgLnRva2VuLmRlbGV0ZWQge1xyXG4gICAgICBjb2xvcjogI2Y5MjY3MjtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4uYm9vbGVhbixcclxuICAgIC50b2tlbi5udW1iZXIge1xyXG4gICAgICBjb2xvcjogI2FlODFmZjtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4uc2VsZWN0b3IsXHJcbiAgICAudG9rZW4uYXR0ci1uYW1lLFxyXG4gICAgLnRva2VuLnN0cmluZyxcclxuICAgIC50b2tlbi5jaGFyLFxyXG4gICAgLnRva2VuLmJ1aWx0aW4sXHJcbiAgICAudG9rZW4uaW5zZXJ0ZWQge1xyXG4gICAgICBjb2xvcjogI2E2ZTIyZTtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4ub3BlcmF0b3IsXHJcbiAgICAudG9rZW4uZW50aXR5LFxyXG4gICAgLnRva2VuLnVybCxcclxuICAgIC5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZyxcclxuICAgIC5zdHlsZSAudG9rZW4uc3RyaW5nLFxyXG4gICAgLnRva2VuLnZhcmlhYmxlIHtcclxuICAgICAgY29sb3I6ICNmOGY4ZjI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLmF0cnVsZSxcclxuICAgIC50b2tlbi5hdHRyLXZhbHVlLFxyXG4gICAgLnRva2VuLmZ1bmN0aW9uLFxyXG4gICAgLnRva2VuLmNsYXNzLW5hbWUge1xyXG4gICAgICBjb2xvcjogI2U2ZGI3NDtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4ua2V5d29yZCB7XHJcbiAgICAgIGNvbG9yOiAjNjZkOWVmO1xyXG4gICAgfVxyXG5cclxuICAgIC50b2tlbi5yZWdleCxcclxuICAgIC50b2tlbi5pbXBvcnRhbnQge1xyXG4gICAgICBjb2xvcjogI2ZkOTcxZjtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4uaW1wb3J0YW50LFxyXG4gICAgLnRva2VuLmJvbGQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC50b2tlbi5pdGFsaWMge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLmVudGl0eSB7XHJcbiAgICAgIGN1cnNvcjogaGVscDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41NXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBoNCxcclxuICAgIGg1LFxyXG4gICAgaDYge1xyXG4gICAgICAvKiBtYXJnaW4tdG9wOiAzLjFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNTVyZW07ICovXHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyLjM3NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCA+ICoge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjU1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXHJcbiAgICAgICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gICAgICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcclxuICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksIDAgMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYW5jaG9yIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmNob3IgPiBzdmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4NSUpIHRyYW5zbGF0ZVgoLTEyNSUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZSAxMDBtcztcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYW5jaG9yOmhvdmVyID4gc3ZnIHtcclxuICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIG1heC13LTJ4bCBweC00IHB5LTggbGc6cHktMjQgbGc6cHgtOFwiPlxyXG4gIDxHcmFkaWVudEhlYWRpbmc+e3Bvc3QudGl0bGV9PC9HcmFkaWVudEhlYWRpbmc+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICB7QGh0bWwgcG9zdC5odG1sfVxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7d0JBeVFvQixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7NkRBQVYsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduQixHQUFJLElBQUMsSUFBSTs7MkNBdExWLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21GQUFWLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7OzsrRUFzTFQsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBM1FJLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSzs7O09BR3JDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxTQUFTLE1BQU0sQ0FBQyxJQUFJOztPQUMxQyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7Q0FDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTs7S0FFbkIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1dBQ1gsSUFBSSxFQUFFLElBQUk7O0VBRW5CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzs7Ozs7T0FSNUIsSUFBSTtDQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7Q0FFaEIsT0FBTzs7T0FFQyxHQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FDM0MsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNOztZQUNSLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUNkLHFDQUFtQyxHQUNuQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FDaEIsNEJBQTBCO1FBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU07O2FBQ3BDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUN4QixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNwRCxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
