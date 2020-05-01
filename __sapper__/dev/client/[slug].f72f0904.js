import { S as SvelteComponentDev, i as init, d as dispatch_dev, I as globals, s as safe_not_equal, v as validate_slots, e as element, o as text, n as space, p as create_component, q as query_selector_all, a as claim_element, b as children, u as claim_text, f as detach_dev, r as claim_space, w as claim_component, h as add_location, g as attr_dev, x as append_dev, j as insert_dev, y as mount_component, t as transition_in, m as transition_out, z as destroy_component, E as set_data_dev } from './client.da99c68d.js';
import { G as GradientHeading } from './GradientHeading.03f6ff1c.js';

/* src\routes\blog\[slug].svelte generated by Svelte v3.21.0 */

const { console: console_1 } = globals;
const file = "src\\routes\\blog\\[slug].svelte";

// (247:2) <GradientHeading>
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
		source: "(247:2) <GradientHeading>",
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
	document.title = title_value = /*post*/ ctx[0].title;

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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-stmhy3\"]", document.head);
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
			add_location(style, file, 68, 2, 1571);
			attr_dev(div0, "class", "content svelte-h6ymk4");
			add_location(div0, file, 248, 2, 5094);
			attr_dev(div1, "class", "container mx-auto max-w-2xl px-4 py-8 lg:py-24 lg:px-8");
			add_location(div1, file, 245, 0, 4969);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, style);
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
				document.title = title_value;
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
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ preload, GradientHeading, post });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmY3MmYwOTA0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG4gICAgLy8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2VcclxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgYmxvZy8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5zbHVnKTtcclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgR3JhZGllbnRIZWFkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYWRpZW50SGVhZGluZy5zdmVsdGVcIjtcclxuICBleHBvcnQgbGV0IHBvc3Q7XHJcbiAgY29uc29sZS5sb2cocG9zdCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC8qXHJcblx0XHRCeSBkZWZhdWx0LCBDU1MgaXMgbG9jYWxseSBzY29wZWQgdG8gdGhlIGNvbXBvbmVudCxcclxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXHJcblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxyXG5cdFx0Z29pbmcgdG8gYXBwZWFyIGluc2lkZSB0aGUge3t7cG9zdC5odG1sfX19IGJsb2NrLFxyXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcclxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcclxuXHQqL1xyXG4gIC5jb250ZW50IDpnbG9iYWwoaDIpIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgOmdsb2JhbCh0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG4gIDpnbG9iYWwodGFibGUpIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICB9XHJcblxyXG4gIDpnbG9iYWwodGFibGUpIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgOmdsb2JhbCh0cikge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG5cclxuICA6Z2xvYmFsKHRoKSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgOmdsb2JhbCh0aCwgdGQpIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxyXG4gIDxzdHlsZT5cclxuICAgIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxyXG4gICAgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XHJcbiAgICAgIGNvbG9yOiAjZjhmOGYyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgXCJBbmRhbGUgTW9ub1wiLCBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICAgICAgLW1vei10YWItc2l6ZTogNDtcclxuICAgICAgLW8tdGFiLXNpemU6IDQ7XHJcbiAgICAgIHRhYi1zaXplOiA0O1xyXG5cclxuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xyXG4gICAgICAtbW96LWh5cGhlbnM6IG5vbmU7XHJcbiAgICAgIC1tcy1oeXBoZW5zOiBub25lO1xyXG4gICAgICBoeXBoZW5zOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENvZGUgYmxvY2tzICovXHJcbiAgICBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNTVyZW07XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgIH1cclxuXHJcbiAgICA6bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcclxuICAgIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjcyODIyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIElubGluZSBjb2RlICovXHJcbiAgICA6bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4uY29tbWVudCxcclxuICAgIC50b2tlbi5wcm9sb2csXHJcbiAgICAudG9rZW4uZG9jdHlwZSxcclxuICAgIC50b2tlbi5jZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBzbGF0ZWdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLnB1bmN0dWF0aW9uIHtcclxuICAgICAgY29sb3I6ICNmOGY4ZjI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWVzcGFjZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4ucHJvcGVydHksXHJcbiAgICAudG9rZW4udGFnLFxyXG4gICAgLnRva2VuLmNvbnN0YW50LFxyXG4gICAgLnRva2VuLnN5bWJvbCxcclxuICAgIC50b2tlbi5kZWxldGVkIHtcclxuICAgICAgY29sb3I6ICNmOTI2NzI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLmJvb2xlYW4sXHJcbiAgICAudG9rZW4ubnVtYmVyIHtcclxuICAgICAgY29sb3I6ICNhZTgxZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLnNlbGVjdG9yLFxyXG4gICAgLnRva2VuLmF0dHItbmFtZSxcclxuICAgIC50b2tlbi5zdHJpbmcsXHJcbiAgICAudG9rZW4uY2hhcixcclxuICAgIC50b2tlbi5idWlsdGluLFxyXG4gICAgLnRva2VuLmluc2VydGVkIHtcclxuICAgICAgY29sb3I6ICNhNmUyMmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLm9wZXJhdG9yLFxyXG4gICAgLnRva2VuLmVudGl0eSxcclxuICAgIC50b2tlbi51cmwsXHJcbiAgICAubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXHJcbiAgICAuc3R5bGUgLnRva2VuLnN0cmluZyxcclxuICAgIC50b2tlbi52YXJpYWJsZSB7XHJcbiAgICAgIGNvbG9yOiAjZjhmOGYyO1xyXG4gICAgfVxyXG5cclxuICAgIC50b2tlbi5hdHJ1bGUsXHJcbiAgICAudG9rZW4uYXR0ci12YWx1ZSxcclxuICAgIC50b2tlbi5mdW5jdGlvbixcclxuICAgIC50b2tlbi5jbGFzcy1uYW1lIHtcclxuICAgICAgY29sb3I6ICNlNmRiNzQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLmtleXdvcmQge1xyXG4gICAgICBjb2xvcjogIzY2ZDllZjtcclxuICAgIH1cclxuXHJcbiAgICAudG9rZW4ucmVnZXgsXHJcbiAgICAudG9rZW4uaW1wb3J0YW50IHtcclxuICAgICAgY29sb3I6ICNmZDk3MWY7XHJcbiAgICB9XHJcblxyXG4gICAgLnRva2VuLmltcG9ydGFudCxcclxuICAgIC50b2tlbi5ib2xkIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudG9rZW4uaXRhbGljIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG5cclxuICAgIC50b2tlbi5lbnRpdHkge1xyXG4gICAgICBjdXJzb3I6IGhlbHA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNTVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIGg2IHtcclxuICAgICAgLyogbWFyZ2luLXRvcDogMy4xcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjU1cmVtOyAqL1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQgPiAqIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxyXG4gICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAgICAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXHJcbiAgICAgICAgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLCAwIDBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFuY2hvciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYW5jaG9yID4gc3ZnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODUlKSB0cmFuc2xhdGVYKC0xMjUlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UgMTAwbXM7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFuY2hvcjpob3ZlciA+IHN2ZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy0yeGwgcHgtNCBweS04IGxnOnB5LTI0IGxnOnB4LThcIj5cclxuICA8R3JhZGllbnRIZWFkaW5nPntwb3N0LnRpdGxlfTwvR3JhZGllbnRIZWFkaW5nPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAge0BodG1sIHBvc3QuaHRtbH1cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3dCQXNQb0IsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OzZEQUFWLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkIsR0FBSSxJQUFDLElBQUk7O3lDQXRMVixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRkFBVixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7K0VBc0xULEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXhQSSxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7OztPQUdyQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssU0FBUyxNQUFNLENBQUMsSUFBSTs7T0FDMUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO0NBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7O0tBRW5CLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztXQUNYLElBQUksRUFBRSxJQUFJOztFQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Ozs7O09BVDVCLElBQUk7Q0FDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
