import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, a as space, v as create_component, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, w as claim_component, l as add_location, j as attr_dev, p as append_dev, o as insert_dev, x as mount_component, A as transition_in, B as transition_out, C as destroy_component, D as set_data_dev } from './index.07b4eea1.js';
import { G as GradientHeading } from './GradientHeading.377867bc.js';

/* src/routes/blog/[slug].svelte generated by Svelte v3.16.0 */
const file = "src/routes/blog/[slug].svelte";

// (159:2) <GradientHeading>
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
		source: "(159:2) <GradientHeading>",
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
			t0 = text("code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      color: #f8f8f2;\n      background: none;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n      font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n      font-size: 1em;\n      text-align: left;\n      white-space: pre;\n      word-spacing: normal;\n      word-break: normal;\n      word-wrap: normal;\n      line-height: 1.5;\n\n      -moz-tab-size: 4;\n      -o-tab-size: 4;\n      tab-size: 4;\n\n      -webkit-hyphens: none;\n      -moz-hyphens: none;\n      -ms-hyphens: none;\n      hyphens: none;\n    }\n\n    /* Code blocks */\n    pre[class*=\"language-\"] {\n      padding: 1em;\n      margin: 0.5em 0;\n      overflow: auto;\n      border-radius: 0.3em;\n    }\n\n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      background: #272822;\n    }\n\n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n      padding: 0.1em;\n      border-radius: 0.3em;\n      white-space: normal;\n    }\n\n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n      color: slategray;\n    }\n\n    .token.punctuation {\n      color: #f8f8f2;\n    }\n\n    .namespace {\n      opacity: 0.7;\n    }\n\n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n      color: #f92672;\n    }\n\n    .token.boolean,\n    .token.number {\n      color: #ae81ff;\n    }\n\n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n      color: #a6e22e;\n    }\n\n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n      color: #f8f8f2;\n    }\n\n    .token.atrule,\n    .token.attr-value,\n    .token.function,\n    .token.class-name {\n      color: #e6db74;\n    }\n\n    .token.keyword {\n      color: #66d9ef;\n    }\n\n    .token.regex,\n    .token.important {\n      color: #fd971f;\n    }\n\n    .token.important,\n    .token.bold {\n      font-weight: bold;\n    }\n    .token.italic {\n      font-style: italic;\n    }\n\n    .token.entity {\n      cursor: help;\n    }");
			t1 = space();
			div1 = element("div");
			create_component(gradientheading.$$.fragment);
			t2 = space();
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			style = claim_element(nodes, "STYLE", {});
			var style_nodes = children(style);
			t0 = claim_text(style_nodes, "code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      color: #f8f8f2;\n      background: none;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n      font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n      font-size: 1em;\n      text-align: left;\n      white-space: pre;\n      word-spacing: normal;\n      word-break: normal;\n      word-wrap: normal;\n      line-height: 1.5;\n\n      -moz-tab-size: 4;\n      -o-tab-size: 4;\n      tab-size: 4;\n\n      -webkit-hyphens: none;\n      -moz-hyphens: none;\n      -ms-hyphens: none;\n      hyphens: none;\n    }\n\n    /* Code blocks */\n    pre[class*=\"language-\"] {\n      padding: 1em;\n      margin: 0.5em 0;\n      overflow: auto;\n      border-radius: 0.3em;\n    }\n\n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      background: #272822;\n    }\n\n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n      padding: 0.1em;\n      border-radius: 0.3em;\n      white-space: normal;\n    }\n\n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n      color: slategray;\n    }\n\n    .token.punctuation {\n      color: #f8f8f2;\n    }\n\n    .namespace {\n      opacity: 0.7;\n    }\n\n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n      color: #f92672;\n    }\n\n    .token.boolean,\n    .token.number {\n      color: #ae81ff;\n    }\n\n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n      color: #a6e22e;\n    }\n\n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n      color: #f8f8f2;\n    }\n\n    .token.atrule,\n    .token.attr-value,\n    .token.function,\n    .token.class-name {\n      color: #e6db74;\n    }\n\n    .token.keyword {\n      color: #66d9ef;\n    }\n\n    .token.regex,\n    .token.important {\n      color: #fd971f;\n    }\n\n    .token.important,\n    .token.bold {\n      font-weight: bold;\n    }\n    .token.italic {\n      font-style: italic;\n    }\n\n    .token.entity {\n      cursor: help;\n    }");
			style_nodes.forEach(detach_dev);
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
			add_location(style, file, 37, 2, 958);
			attr_dev(div0, "class", "content svelte-8d2sdz");
			add_location(div0, file, 160, 2, 3216);
			attr_dev(div1, "class", "container py-24 lg:py-32 px-4 mx-auto max-w-6xl");
			add_location(div1, file, 157, 0, 3101);
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
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => {
		return { post };
	};

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

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
		const props = options.props || ({});

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmMwZjc1ZDU2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGJsb2cvJHtwYXJhbXMuc2x1Z30uanNvbmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIHsgcG9zdDogZGF0YSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKHJlcy5zdGF0dXMsIGRhdGEubWVzc2FnZSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEdyYWRpZW50SGVhZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmFkaWVudEhlYWRpbmcuc3ZlbHRlXCI7XG4gIGV4cG9ydCBsZXQgcG9zdDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcblx0Ki9cbiAgLmNvbnRlbnQgOmdsb2JhbChoMikge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgPHN0eWxlPlxuICAgIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxuICAgIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuICAgICAgY29sb3I6ICNmOGY4ZjI7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgICAgd29yZC1icmVhazogbm9ybWFsO1xuICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuXG4gICAgICAtbW96LXRhYi1zaXplOiA0O1xuICAgICAgLW8tdGFiLXNpemU6IDQ7XG4gICAgICB0YWItc2l6ZTogNDtcblxuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xuICAgICAgLW1vei1oeXBoZW5zOiBub25lO1xuICAgICAgLW1zLWh5cGhlbnM6IG5vbmU7XG4gICAgICBoeXBoZW5zOiBub25lO1xuICAgIH1cblxuICAgIC8qIENvZGUgYmxvY2tzICovXG4gICAgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIH1cblxuICAgIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxuICAgIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuICAgICAgYmFja2dyb3VuZDogIzI3MjgyMjtcbiAgICB9XG5cbiAgICAvKiBJbmxpbmUgY29kZSAqL1xuICAgIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgICAgIHBhZGRpbmc6IDAuMWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC50b2tlbi5jb21tZW50LFxuICAgIC50b2tlbi5wcm9sb2csXG4gICAgLnRva2VuLmRvY3R5cGUsXG4gICAgLnRva2VuLmNkYXRhIHtcbiAgICAgIGNvbG9yOiBzbGF0ZWdyYXk7XG4gICAgfVxuXG4gICAgLnRva2VuLnB1bmN0dWF0aW9uIHtcbiAgICAgIGNvbG9yOiAjZjhmOGYyO1xuICAgIH1cblxuICAgIC5uYW1lc3BhY2Uge1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cblxuICAgIC50b2tlbi5wcm9wZXJ0eSxcbiAgICAudG9rZW4udGFnLFxuICAgIC50b2tlbi5jb25zdGFudCxcbiAgICAudG9rZW4uc3ltYm9sLFxuICAgIC50b2tlbi5kZWxldGVkIHtcbiAgICAgIGNvbG9yOiAjZjkyNjcyO1xuICAgIH1cblxuICAgIC50b2tlbi5ib29sZWFuLFxuICAgIC50b2tlbi5udW1iZXIge1xuICAgICAgY29sb3I6ICNhZTgxZmY7XG4gICAgfVxuXG4gICAgLnRva2VuLnNlbGVjdG9yLFxuICAgIC50b2tlbi5hdHRyLW5hbWUsXG4gICAgLnRva2VuLnN0cmluZyxcbiAgICAudG9rZW4uY2hhcixcbiAgICAudG9rZW4uYnVpbHRpbixcbiAgICAudG9rZW4uaW5zZXJ0ZWQge1xuICAgICAgY29sb3I6ICNhNmUyMmU7XG4gICAgfVxuXG4gICAgLnRva2VuLm9wZXJhdG9yLFxuICAgIC50b2tlbi5lbnRpdHksXG4gICAgLnRva2VuLnVybCxcbiAgICAubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXG4gICAgLnN0eWxlIC50b2tlbi5zdHJpbmcsXG4gICAgLnRva2VuLnZhcmlhYmxlIHtcbiAgICAgIGNvbG9yOiAjZjhmOGYyO1xuICAgIH1cblxuICAgIC50b2tlbi5hdHJ1bGUsXG4gICAgLnRva2VuLmF0dHItdmFsdWUsXG4gICAgLnRva2VuLmZ1bmN0aW9uLFxuICAgIC50b2tlbi5jbGFzcy1uYW1lIHtcbiAgICAgIGNvbG9yOiAjZTZkYjc0O1xuICAgIH1cblxuICAgIC50b2tlbi5rZXl3b3JkIHtcbiAgICAgIGNvbG9yOiAjNjZkOWVmO1xuICAgIH1cblxuICAgIC50b2tlbi5yZWdleCxcbiAgICAudG9rZW4uaW1wb3J0YW50IHtcbiAgICAgIGNvbG9yOiAjZmQ5NzFmO1xuICAgIH1cblxuICAgIC50b2tlbi5pbXBvcnRhbnQsXG4gICAgLnRva2VuLmJvbGQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC50b2tlbi5pdGFsaWMge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cblxuICAgIC50b2tlbi5lbnRpdHkge1xuICAgICAgY3Vyc29yOiBoZWxwO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB5LTI0IGxnOnB5LTMyIHB4LTQgbXgtYXV0byBtYXgtdy02eGxcIj5cbiAgPEdyYWRpZW50SGVhZGluZz57cG9zdC50aXRsZX08L0dyYWRpZW50SGVhZGluZz5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIHtAaHRtbCBwb3N0Lmh0bWx9XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7d0JBOEpvQixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7NkRBQVYsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduQixHQUFJLElBQUMsSUFBSTs7eUNBN0hWLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRkFBVixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7K0VBNkhULEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWhLSSxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7T0FHckMsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLFNBQVMsTUFBTSxDQUFDLElBQUk7T0FDMUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOztLQUV2QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7V0FDWCxJQUFJLEVBQUUsSUFBSTs7RUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7OztPQVI1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
