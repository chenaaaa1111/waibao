/*
* bootstrap-table - v1.12.1 - 2018-03-12
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2018 zhixin wen
* Licensed MIT License
*/
!function (a) {
    "use strict";
    var b = 3;
    try {
        b = parseInt(a.fn.dropdown.Constructor.VERSION, 10)
    } catch (c) {
    }
    var d = {
        3: {
            buttonsClass: "default",
            iconsPrefix: "glyphicon",
            icons: {
                paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
                paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
                refresh: "glyphicon-refresh icon-refresh",
                toggleOff: "glyphicon-list-alt icon-list-alt",
                toggleOn: "glyphicon-list-alt icon-list-alt",
                columns: "glyphicon-th icon-th",
                detailOpen: "glyphicon-plus icon-plus",
                detailClose: "glyphicon-minus icon-minus",
                fullscreen: "glyphicon-fullscreen"
            },
            pullClass: "pull",
            toobarDropdowHtml: ['<ul class="dropdown-menu" role="menu">', "</ul>"],
            toobarDropdowItemHtml: '<li role="menuitem"><label>%s</label></li>',
            pageDropdownHtml: ['<ul class="dropdown-menu" role="menu">', "</ul>"],
            pageDropdownItemHtml: '<li role="menuitem" class="%s"><a href="#">%s</a></li>'
        },
        4: {
            buttonsClass: "secondary",
            iconsPrefix: "fa",
            icons: {
                paginationSwitchDown: "fa-toggle-down",
                paginationSwitchUp: "fa-toggle-up",
                refresh: "fa-refresh",
                toggleOff: "fa-toggle-off",
                toggleOn: "fa-toggle-on",
                columns: "fa-th-list",
                detailOpen: "fa-plus",
                detailClose: "fa-minus",
                fullscreen: "fa-arrows-alt"
            },
            pullClass: "float",
            toobarDropdowHtml: ['<div class="dropdown-menu dropdown-menu-right">', "</div>"],
            toobarDropdowItemHtml: '<label class="dropdown-item">%s</label>',
            pageDropdownHtml: ['<div class="dropdown-menu">', "</div>"],
            pageDropdownItemHtml: '<a class="dropdown-item %s" href="#">%s</a>'
        }
    }[b], e = null, f = function (a) {
        var b = arguments, c = !0, d = 1;
        return a = a.replace(/%s/g, function () {
            var a = b[d++];
            return "undefined" == typeof a ? (c = !1, "") : a
        }), c ? a : ""
    }, g = function (b, c, d, e) {
        var f = "";
        return a.each(b, function (a, b) {
            return b[c] === e ? (f = b[d], !1) : !0
        }), f
    }, h = function (b) {
        var c, d, e, f = 0, g = [];
        for (c = 0; c < b[0].length; c++) f += b[0][c].colspan || 1;
        for (c = 0; c < b.length; c++) for (g[c] = [], d = 0; f > d; d++) g[c][d] = !1;
        for (c = 0; c < b.length; c++) for (d = 0; d < b[c].length; d++) {
            var h = b[c][d], i = h.rowspan || 1, j = h.colspan || 1, k = a.inArray(!1, g[c]);
            for (1 === j && (h.fieldIndex = k, "undefined" == typeof h.field && (h.field = k)), e = 0; i > e; e++) g[c + e][k] = !0;
            for (e = 0; j > e; e++) g[c][k + e] = !0
        }
    }, i = function () {
        if (null === e) {
            var b, c, d = a("<p/>").addClass("fixed-table-scroll-inner"),
                f = a("<div/>").addClass("fixed-table-scroll-outer");
            f.append(d), a("body").append(f), b = d[0].offsetWidth, f.css("overflow", "scroll"), c = d[0].offsetWidth, b === c && (c = f[0].clientWidth), f.remove(), e = b - c
        }
        return e
    }, j = function (b, c, d, e) {
        var g = c;
        if ("string" == typeof c) {
            var h = c.split(".");
            h.length > 1 ? (g = window, a.each(h, function (a, b) {
                g = g[b]
            })) : g = window[c]
        }
        return "object" == typeof g ? g : "function" == typeof g ? g.apply(b, d || []) : !g && "string" == typeof c && f.apply(this, [c].concat(d)) ? f.apply(this, [c].concat(d)) : e
    }, k = function (b, c, d) {
        var e = Object.getOwnPropertyNames || function (a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b
        }, f = e(b), g = e(c), h = "";
        if (d && f.length !== g.length) return !1;
        for (var i = 0; i < f.length; i++) if (h = f[i], a.inArray(h, g) > -1 && b[h] !== c[h]) return !1;
        return !0
    }, l = function (a) {
        return "string" == typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;") : a
    }, m = function (a) {
        for (var b in a) {
            var c = b.split(/(?=[A-Z])/).join("-").toLowerCase();
            c !== b && (a[c] = a[b], delete a[b])
        }
        return a
    }, n = function (a, b, c) {
        var d = a;
        if ("string" != typeof b || a.hasOwnProperty(b)) return c ? l(a[b]) : a[b];
        var e = b.split(".");
        for (var f in e) e.hasOwnProperty(f) && (d = d && d[e[f]]);
        return c ? l(d) : d
    }, o = function () {
        return !!(navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
    }, p = function () {
        Object.keys || (Object.keys = function () {
            var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                d = c.length;
            return function (e) {
                if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
                var f, g, h = [];
                for (f in e) a.call(e, f) && h.push(f);
                if (b) for (g = 0; d > g; g++) a.call(e, c[g]) && h.push(c[g]);
                return h
            }
        }())
    }, q = function (b, c) {
        this.options = c, this.$el = a(b), this.$el_ = this.$el.clone(), this.timeoutId_ = 0, this.timeoutFooter_ = 0, this.init()
    };
    q.DEFAULTS = {
        classes: "table table-hover",
        sortClass: void 0,
        locale: void 0,
        height: void 0,
        undefinedText: "-",
        sortName: void 0,
        sortOrder: "asc",
        sortStable: !1,
        rememberOrder: !1,
        striped: !1,
        columns: [[]],
        data: [],
        totalField: "total",
        dataField: "rows",
        method: "get",
        url: void 0,
        ajax: void 0,
        cache: !0,
        contentType: "application/json",
        dataType: "json",
        ajaxOptions: {},
        queryParams: function (a) {
            return a
        },
        queryParamsType: "limit",
        responseHandler: function (a) {
            return a
        },
        pagination: !1,
        onlyInfoPagination: !1,
        paginationLoop: !0,
        sidePagination: "client",
        totalRows: 0,
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        paginationHAlign: "right",
        paginationVAlign: "bottom",
        paginationDetailHAlign: "left",
        paginationPreText: "&lsaquo;",
        paginationNextText: "&rsaquo;",
        search: !1,
        searchOnEnterKey: !1,
        strictSearch: !1,
        searchAlign: "right",
        selectItemName: "btSelectItem",
        showHeader: !0,
        showFooter: !1,
        showColumns: !1,
        showPaginationSwitch: !1,
        showRefresh: !1,
        showToggle: !1,
        showFullscreen: !1,
        smartDisplay: !0,
        escape: !1,
        minimumCountColumns: 1,
        idField: void 0,
        uniqueId: void 0,
        cardView: !1,
        detailView: !1,
        detailFormatter: function () {
            return ""
        },
        detailFilter: function () {
            return !0
        },
        trimOnSearch: !0,
        clickToSelect: !1,
        singleSelect: !1,
        toolbar: void 0,
        toolbarAlign: "left",
        buttonsToolbar: void 0,
        buttonsAlign: "right",
        checkboxHeader: !0,
        sortable: !0,
        silentSort: !0,
        maintainSelected: !1,
        searchTimeOut: 500,
        searchText: "",
        iconSize: void 0,
        buttonsClass: d.buttonsClass,
        iconsPrefix: d.iconsPrefix,
        icons: d.icons,
        customSearch: a.noop,
        customSort: a.noop,
        ignoreClickToSelectOn: function (b) {
            return a.inArray(b.tagName, ["A", "BUTTON"])
        },
        rowStyle: function () {
            return {}
        },
        rowAttributes: function () {
            return {}
        },
        footerStyle: function () {
            return {}
        },
        onAll: function () {
            return !1
        },
        onClickCell: function () {
            return !1
        },
        onDblClickCell: function () {
            return !1
        },
        onClickRow: function () {
            return !1
        },
        onDblClickRow: function () {
            return !1
        },
        onSort: function () {
            return !1
        },
        onCheck: function () {
            return !1
        },
        onUncheck: function () {
            return !1
        },
        onCheckAll: function () {
            return !1
        },
        onUncheckAll: function () {
            return !1
        },
        onCheckSome: function () {
            return !1
        },
        onUncheckSome: function () {
            return !1
        },
        onLoadSuccess: function () {
            return !1
        },
        onLoadError: function () {
            return !1
        },
        onColumnSwitch: function () {
            return !1
        },
        onPageChange: function () {
            return !1
        },
        onSearch: function () {
            return !1
        },
        onToggle: function () {
            return !1
        },
        onPreBody: function () {
            return !1
        },
        onPostBody: function () {
            return !1
        },
        onPostHeader: function () {
            return !1
        },
        onExpandRow: function () {
            return !1
        },
        onCollapseRow: function () {
            return !1
        },
        onRefreshOptions: function () {
            return !1
        },
        onRefresh: function () {
            return !1
        },
        onResetView: function () {
            return !1
        },
        onScrollBody: function () {
            return !1
        }
    }, q.LOCALES = {}, q.LOCALES["en-US"] = q.LOCALES.en = {
        formatLoadingMessage: function () {
            return "Loading, please wait..."
        }, formatRecordsPerPage: function (a) {
            return f("%s rows per page", a)
        }, formatShowingRows: function (a, b, c) {
            return f("Showing %s to %s of %s rows", a, b, c)
        }, formatDetailPagination: function (a) {
            return f("Showing %s rows", a)
        }, formatSearch: function () {
            return "Search"
        }, formatNoMatches: function () {
            return "No matching records found"
        }, formatPaginationSwitch: function () {
            return "Hide/Show pagination"
        }, formatRefresh: function () {
            return "Refresh"
        }, formatToggle: function () {
            return "Toggle"
        }, formatFullscreen: function () {
            return "Fullscreen"
        }, formatColumns: function () {
            return "Columns"
        }, formatAllRows: function () {
            return "All"
        }
    }, a.extend(q.DEFAULTS, q.LOCALES["en-US"]), q.COLUMN_DEFAULTS = {
        radio: !1,
        checkbox: !1,
        checkboxEnabled: !0,
        field: void 0,
        title: void 0,
        titleTooltip: void 0,
        "class": void 0,
        align: void 0,
        halign: void 0,
        falign: void 0,
        valign: void 0,
        width: void 0,
        sortable: !1,
        order: "asc",
        visible: !0,
        switchable: !0,
        clickToSelect: !0,
        formatter: void 0,
        footerFormatter: void 0,
        events: void 0,
        sorter: void 0,
        sortName: void 0,
        cellStyle: void 0,
        searchable: !0,
        searchFormatter: !0,
        cardVisible: !0,
        escape: !1,
        showSelectTitle: !1
    }, q.EVENTS = {
        "all.bs.table": "onAll",
        "click-cell.bs.table": "onClickCell",
        "dbl-click-cell.bs.table": "onDblClickCell",
        "click-row.bs.table": "onClickRow",
        "dbl-click-row.bs.table": "onDblClickRow",
        "sort.bs.table": "onSort",
        "check.bs.table": "onCheck",
        "uncheck.bs.table": "onUncheck",
        "check-all.bs.table": "onCheckAll",
        "uncheck-all.bs.table": "onUncheckAll",
        "check-some.bs.table": "onCheckSome",
        "uncheck-some.bs.table": "onUncheckSome",
        "load-success.bs.table": "onLoadSuccess",
        "load-error.bs.table": "onLoadError",
        "column-switch.bs.table": "onColumnSwitch",
        "page-change.bs.table": "onPageChange",
        "search.bs.table": "onSearch",
        "toggle.bs.table": "onToggle",
        "pre-body.bs.table": "onPreBody",
        "post-body.bs.table": "onPostBody",
        "post-header.bs.table": "onPostHeader",
        "expand-row.bs.table": "onExpandRow",
        "collapse-row.bs.table": "onCollapseRow",
        "refresh-options.bs.table": "onRefreshOptions",
        "reset-view.bs.table": "onResetView",
        "refresh.bs.table": "onRefresh",
        "scroll-body.bs.table": "onScrollBody"
    }, q.prototype.init = function () {
        this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initHiddenRows(), this.initFooter(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer()
    }, q.prototype.initLocale = function () {
        if (this.options.locale) {
            var b = this.options.locale.split(/-|_/);
            b[0].toLowerCase(), b[1] && b[1].toUpperCase(), a.fn.bootstrapTable.locales[this.options.locale] ? a.extend(this.options, a.fn.bootstrapTable.locales[this.options.locale]) : a.fn.bootstrapTable.locales[b.join("-")] ? a.extend(this.options, a.fn.bootstrapTable.locales[b.join("-")]) : a.fn.bootstrapTable.locales[b[0]] && a.extend(this.options, a.fn.bootstrapTable.locales[b[0]])
        }
    }, q.prototype.initContainer = function () {
        this.$container = a(['<div class="bootstrap-table">', '<div class="fixed-table-toolbar"></div>', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination" style="clear: both;"></div>' : "", '<div class="fixed-table-container">', '<div class="fixed-table-header"><table></table></div>', '<div class="fixed-table-body">', '<div class="fixed-table-loading">', this.options.formatLoadingMessage(), "</div>", "</div>", '<div class="fixed-table-footer"><table><tr></tr></table></div>', "</div>", "bottom" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination"></div>' : "", "</div>"].join("")), this.$container.insertAfter(this.$el), this.$tableContainer = this.$container.find(".fixed-table-container"), this.$tableHeader = this.$container.find(".fixed-table-header"), this.$tableBody = this.$container.find(".fixed-table-body"), this.$tableLoading = this.$container.find(".fixed-table-loading"), this.$tableFooter = this.$container.find(".fixed-table-footer"), this.$toolbar = this.options.buttonsToolbar ? a("body").find(this.options.buttonsToolbar) : this.$container.find(".fixed-table-toolbar"), this.$pagination = this.$container.find(".fixed-table-pagination"), this.$tableBody.append(this.$el), this.$container.after('<div class="clearfix"></div>'), this.$el.addClass(this.options.classes), this.options.striped && this.$el.addClass("table-striped"), -1 !== a.inArray("table-no-bordered", this.options.classes.split(" ")) && this.$tableContainer.addClass("table-no-bordered")
    }, q.prototype.initTable = function () {
        var b = this, c = [], d = [];
        if (this.$header = this.$el.find(">thead"), this.$header.length || (this.$header = a("<thead></thead>").appendTo(this.$el)), this.$header.find("tr").each(function () {
            var b = [];
            a(this).find("th").each(function () {
                "undefined" != typeof a(this).data("field") && a(this).data("field", a(this).data("field") + ""), b.push(a.extend({}, {
                    title: a(this).html(),
                    "class": a(this).attr("class"),
                    titleTooltip: a(this).attr("title"),
                    rowspan: a(this).attr("rowspan") ? +a(this).attr("rowspan") : void 0,
                    colspan: a(this).attr("colspan") ? +a(this).attr("colspan") : void 0
                }, a(this).data()))
            }), c.push(b)
        }), a.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]), this.options.columns = a.extend(!0, [], c, this.options.columns), this.columns = [], this.fieldsColumnsIndex = [], h(this.options.columns), a.each(this.options.columns, function (c, d) {
            a.each(d, function (d, e) {
                e = a.extend({}, q.COLUMN_DEFAULTS, e), "undefined" != typeof e.fieldIndex && (b.columns[e.fieldIndex] = e, b.fieldsColumnsIndex[e.field] = e.fieldIndex), b.options.columns[c][d] = e
            })
        }), !this.options.data.length) {
            var e = [];
            this.$el.find(">tbody>tr").each(function (c) {
                var f = {};
                f._id = a(this).attr("id"), f._class = a(this).attr("class"), f._data = m(a(this).data()), a(this).find(">td").each(function (d) {
                    for (var g, h, i = a(this), j = +i.attr("colspan") || 1, k = +i.attr("rowspan") || 1; e[c] && e[c][d]; d++) ;
                    for (g = d; d + j > g; g++) for (h = c; c + k > h; h++) e[h] || (e[h] = []), e[h][g] = !0;
                    var l = b.columns[d].field;
                    f[l] = a(this).html(), f["_" + l + "_id"] = a(this).attr("id"), f["_" + l + "_class"] = a(this).attr("class"), f["_" + l + "_rowspan"] = a(this).attr("rowspan"), f["_" + l + "_colspan"] = a(this).attr("colspan"), f["_" + l + "_title"] = a(this).attr("title"), f["_" + l + "_data"] = m(a(this).data())
                }), d.push(f)
            }), this.options.data = d, d.length && (this.fromHtml = !0)
        }
    }, q.prototype.initHeader = function () {
        var b = this, c = {}, d = [];
        this.header = {
            fields: [],
            styles: [],
            classes: [],
            formatters: [],
            events: [],
            sorters: [],
            sortNames: [],
            cellStyles: [],
            searchables: []
        }, a.each(this.options.columns, function (e, g) {
            d.push("<tr>"), 0 === e && !b.options.cardView && b.options.detailView && d.push(f('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>', b.options.columns.length)), a.each(g, function (a, e) {
                var g = "", h = "", i = "", j = "", k = f(' class="%s"', e["class"]),
                    m = (b.options.sortOrder || e.order, "px"), n = e.width;
                if (void 0 === e.width || b.options.cardView || "string" == typeof e.width && -1 !== e.width.indexOf("%") && (m = "%"), e.width && "string" == typeof e.width && (n = e.width.replace("%", "").replace("px", "")), h = f("text-align: %s; ", e.halign ? e.halign : e.align), i = f("text-align: %s; ", e.align), j = f("vertical-align: %s; ", e.valign), j += f("width: %s; ", !e.checkbox && !e.radio || n ? n ? n + m : void 0 : e.showSelectTitle ? void 0 : "36px"), "undefined" != typeof e.fieldIndex) {
                    if (b.header.fields[e.fieldIndex] = e.field, b.header.styles[e.fieldIndex] = i + j, b.header.classes[e.fieldIndex] = k, b.header.formatters[e.fieldIndex] = e.formatter, b.header.events[e.fieldIndex] = e.events, b.header.sorters[e.fieldIndex] = e.sorter, b.header.sortNames[e.fieldIndex] = e.sortName, b.header.cellStyles[e.fieldIndex] = e.cellStyle, b.header.searchables[e.fieldIndex] = e.searchable, !e.visible) return;
                    if (b.options.cardView && !e.cardVisible) return;
                    c[e.field] = e
                }
                d.push("<th" + f(' title="%s"', e.titleTooltip), e.checkbox || e.radio ? f(' class="bs-checkbox %s"', e["class"] || "") : k, f(' style="%s"', h + j), f(' rowspan="%s"', e.rowspan), f(' colspan="%s"', e.colspan), f(' data-field="%s"', e.field), 0 === a && e.fieldIndex ? " data-not-first-th" : "", ">"), d.push(f('<div class="th-inner %s">', b.options.sortable && e.sortable ? "sortable both" : "")), g = b.options.escape ? l(e.title) : e.title;
                var o = g;
                e.checkbox && (g = "", !b.options.singleSelect && b.options.checkboxHeader && (g = '<input name="btSelectAll" type="checkbox" />'), b.header.stateField = e.field), e.radio && (g = "", b.header.stateField = e.field, b.options.singleSelect = !0), !g && e.showSelectTitle && (g += o), d.push(g), d.push("</div>"), d.push('<div class="fht-cell"></div>'), d.push("</div>"), d.push("</th>")
            }), d.push("</tr>")
        }), this.$header.html(d.join("")), this.$header.find("th[data-field]").each(function () {
            a(this).data(c[a(this).data("field")])
        }), this.$container.off("click", ".th-inner").on("click", ".th-inner", function (c) {
            var d = a(this);
            return b.options.detailView && !d.parent().hasClass("bs-checkbox") && d.closest(".bootstrap-table")[0] !== b.$container[0] ? !1 : void(b.options.sortable && d.parent().data().sortable && b.onSort(c))
        }), this.$header.children().children().off("keypress").on("keypress", function (c) {
            if (b.options.sortable && a(this).data().sortable) {
                var d = c.keyCode || c.which;
                13 == d && b.onSort(c)
            }
        }), a(window).off("resize.bootstrap-table"), !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css("top", this.$header.outerHeight() + 1), this.getCaret(), a(window).on("resize.bootstrap-table", a.proxy(this.resetWidth, this))), this.$selectAll = this.$header.find('[name="btSelectAll"]'), this.$selectAll.off("click").on("click", function () {
            var c = a(this).prop("checked");
            b[c ? "checkAll" : "uncheckAll"](), b.updateSelected()
        })
    }, q.prototype.initFooter = function () {
        !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
    }, q.prototype.initData = function (a, b) {
        this.options.data = "append" === b ? this.options.data.concat(a) : "prepend" === b ? [].concat(a).concat(this.options.data) : a || this.options.data, this.data = this.options.data, "server" !== this.options.sidePagination && this.initSort()
    }, q.prototype.initSort = function () {
        var b = this, c = this.options.sortName, d = "desc" === this.options.sortOrder ? -1 : 1,
            e = a.inArray(this.options.sortName, this.header.fields), g = 0;
        return this.options.customSort !== a.noop ? void this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder]) : void(-1 !== e && (this.options.sortStable && a.each(this.data, function (a, b) {
            b._position = a
        }), this.data.sort(function (f, g) {
            b.header.sortNames[e] && (c = b.header.sortNames[e]);
            var h = n(f, c, b.options.escape), i = n(g, c, b.options.escape),
                k = j(b.header, b.header.sorters[e], [h, i, f, g]);
            return void 0 !== k ? b.options.sortStable && 0 === k ? f._position - g._position : d * k : ((void 0 === h || null === h) && (h = ""), (void 0 === i || null === i) && (i = ""), b.options.sortStable && h === i ? (h = f._position, i = g._position, f._position - g._position) : a.isNumeric(h) && a.isNumeric(i) ? (h = parseFloat(h), i = parseFloat(i), i > h ? -1 * d : d) : h === i ? 0 : ("string" != typeof h && (h = h.toString()), -1 === h.localeCompare(i) ? -1 * d : d))
        }), void 0 !== this.options.sortClass && (clearTimeout(g), g = setTimeout(function () {
            b.$el.removeClass(b.options.sortClass);
            var a = b.$header.find(f('[data-field="%s"]', b.options.sortName).index() + 1);
            b.$el.find(f("tr td:nth-child(%s)", a)).addClass(b.options.sortClass)
        }, 250))))
    }, q.prototype.onSort = function (b) {
        var c = "keypress" === b.type ? a(b.currentTarget) : a(b.currentTarget).parent(),
            d = this.$header.find("th").eq(c.index());
        return this.$header.add(this.$header_).find("span.order").remove(), this.options.sortName === c.data("field") ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc" : "asc" : (this.options.sortName = c.data("field"), this.options.sortOrder = this.options.rememberOrder ? "asc" === c.data("order") ? "desc" : "asc" : this.columns[this.fieldsColumnsIndex[c.data("field")]].order), this.trigger("sort", this.options.sortName, this.options.sortOrder), c.add(d).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination ? void this.initServer(this.options.silentSort) : (this.initSort(), void this.initBody())
    }, q.prototype.initToolbar = function () {
        var b, c, e = this, g = [], h = 0, i = 0;
        this.$toolbar.find(".bs-bars").children().length && a("body").append(a(this.options.toolbar)), this.$toolbar.html(""), ("string" == typeof this.options.toolbar || "object" == typeof this.options.toolbar) && a(f('<div class="bs-bars %s-%s"></div>', d.pullClass, this.options.toolbarAlign)).appendTo(this.$toolbar).append(a(this.options.toolbar)), g = [f('<div class="columns columns-%s btn-group %s-%s">', this.options.buttonsAlign, d.pullClass, this.options.buttonsAlign)], "string" == typeof this.options.icons && (this.options.icons = j(null, this.options.icons)), this.options.showPaginationSwitch && g.push(f('<button class="btn' + f(" btn-%s", this.options.buttonsClass) + f(" btn-%s", this.options.iconSize) + '" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">', this.options.formatPaginationSwitch()), f('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), "</button>"), this.options.showFullscreen && this.$toolbar.find('button[name="fullscreen"]').off("click").on("click", a.proxy(this.toggleFullscreen, this)), this.options.showRefresh && g.push(f('<button class="btn' + f(" btn-%s", this.options.buttonsClass) + f(" btn-%s", this.options.iconSize) + '" type="button" name="refresh" aria-label="refresh" title="%s">', this.options.formatRefresh()), f('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh), "</button>"), this.options.showToggle && g.push(f('<button class="btn' + f(" btn-%s", this.options.buttonsClass) + f(" btn-%s", this.options.iconSize) + '" type="button" name="toggle" aria-label="toggle" title="%s">', this.options.formatToggle()), f('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle), "</button>"), this.options.showFullscreen && g.push(f('<button class="btn' + f(" btn-%s", this.options.buttonsClass) + f(" btn-%s", this.options.iconSize) + '" type="button" name="fullscreen" aria-label="fullscreen" title="%s">', this.options.formatFullscreen()), f('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.fullscreen), "</button>"), this.options.showColumns && (g.push(f('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" aria-label="columns" class="btn' + f(" btn-%s", this.options.buttonsClass) + f(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', f('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', "</button>", d.toobarDropdowHtml[0]), a.each(this.columns, function (a, b) {
            if (!(b.radio || b.checkbox || e.options.cardView && !b.cardVisible)) {
                var c = b.visible ? ' checked="checked"' : "";
                b.switchable && (g.push(f(d.toobarDropdowItemHtml, f('<input type="checkbox" data-field="%s" value="%s"%s> %s', b.field, a, c, b.title))), i++)
            }
        }), g.push(d.toobarDropdowHtml[1], "</div>")), g.push("</div>"), (this.showToolbar || g.length > 2) && this.$toolbar.append(g.join("")), this.options.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", a.proxy(this.togglePagination, this)), this.options.showRefresh && this.$toolbar.find('button[name="refresh"]').off("click").on("click", a.proxy(this.refresh, this)), this.options.showToggle && this.$toolbar.find('button[name="toggle"]').off("click").on("click", function () {
            e.toggleView()
        }), this.options.showColumns && (b = this.$toolbar.find(".keep-open"), i <= this.options.minimumCountColumns && b.find("input").prop("disabled", !0), b.find("li").off("click").on("click", function (a) {
            a.stopImmediatePropagation()
        }), b.find("input").off("click").on("click", function () {
            var b = a(this);
            e.toggleColumn(a(this).val(), b.prop("checked"), !1), e.trigger("column-switch", a(this).data("field"), b.prop("checked"))
        })), this.options.search && (g = [], g.push(f('<div class="%s-%s search">', d.pullClass, this.options.searchAlign), f('<input class="form-control' + f(" input-%s", this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), "</div>"), this.$toolbar.append(g.join("")), c = this.$toolbar.find(".search input"), c.off("keyup drop blur").on("keyup drop blur", function (b) {
            e.options.searchOnEnterKey && 13 !== b.keyCode || a.inArray(b.keyCode, [37, 38, 39, 40]) > -1 || (clearTimeout(h), h = setTimeout(function () {
                e.onSearch(b)
            }, e.options.searchTimeOut))
        }), o() && c.off("mouseup").on("mouseup", function (a) {
            clearTimeout(h), h = setTimeout(function () {
                e.onSearch(a)
            }, e.options.searchTimeOut)
        }))
    }, q.prototype.onSearch = function (b) {
        var c = a.trim(a(b.currentTarget).val());
        this.options.trimOnSearch && a(b.currentTarget).val() !== c && a(b.currentTarget).val(c), c !== this.searchText && (this.searchText = c, this.options.searchText = c, this.options.pageNumber = 1, this.initSearch(), b.firedByInitSearchText ? "client" === this.options.sidePagination && this.updatePagination() : this.updatePagination(), this.trigger("search", c))
    }, q.prototype.initSearch = function () {
        var b = this;
        if ("server" !== this.options.sidePagination) {
            if (this.options.customSearch !== a.noop) return void window[this.options.customSearch].apply(this, [this.searchText]);
            var c = this.searchText && (this.options.escape ? l(this.searchText) : this.searchText).toLowerCase(),
                d = a.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
            this.data = d ? a.grep(this.options.data, function (b) {
                for (var c in d) if (a.isArray(d[c]) && -1 === a.inArray(b[c], d[c]) || !a.isArray(d[c]) && b[c] !== d[c]) return !1;
                return !0
            }) : this.options.data, this.data = c ? a.grep(this.data, function (d, e) {
                for (var f = 0; f < b.header.fields.length; f++) if (b.header.searchables[f]) {
                    var g, h = a.isNumeric(b.header.fields[f]) ? parseInt(b.header.fields[f], 10) : b.header.fields[f],
                        i = b.columns[b.fieldsColumnsIndex[h]];
                    if ("string" == typeof h) {
                        g = d;
                        for (var k = h.split("."), l = 0; l < k.length; l++) null != g[k[l]] && (g = g[k[l]]);
                        i && i.searchFormatter && (g = j(i, b.header.formatters[f], [g, d, e], g))
                    } else g = d[h];
                    if ("string" == typeof g || "number" == typeof g) if (b.options.strictSearch) {
                        if ((g + "").toLowerCase() === c) return !0
                    } else if (-1 !== (g + "").toLowerCase().indexOf(c)) return !0
                }
                return !1
            }) : this.data
        }
    }, q.prototype.initPagination = function () {
        if (!this.options.pagination) return void this.$pagination.hide();
        this.$pagination.show();
        var b, c, e, g, h, i, j, k = this, l = [], m = !1, n = this.getData(), o = this.options.pageList;
        if ("server" !== this.options.sidePagination && (this.options.totalRows = n.length), this.totalPages = 0, this.options.totalRows) {
            if (this.options.pageSize === this.options.formatAllRows()) this.options.pageSize = this.options.totalRows, m = !0; else if (this.options.pageSize === this.options.totalRows) {
                var p = "string" == typeof this.options.pageList ? this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").toLowerCase().split(",") : this.options.pageList;
                a.inArray(this.options.formatAllRows().toLowerCase(), p) > -1 && (m = !0)
            }
            this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1, this.options.totalPages = this.totalPages
        }
        if (this.totalPages > 0 && this.options.pageNumber > this.totalPages && (this.options.pageNumber = this.totalPages), this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1, this.pageTo = this.options.pageNumber * this.options.pageSize, this.pageTo > this.options.totalRows && (this.pageTo = this.options.totalRows), l.push(f('<div class="%s-%s pagination-detail">', d.pullClass, this.options.paginationDetailHAlign), '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), "</span>"), !this.options.onlyInfoPagination) {
            l.push('<span class="page-list">');
            var q = [f('<span class="btn-group %s">', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? "dropdown" : "dropup"), '<button type="button" class="btn' + f(" btn-%s", this.options.buttonsClass) + f(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', m ? this.options.formatAllRows() : this.options.pageSize, "</span>", ' <span class="caret"></span>', "</button>", d.pageDropdownHtml[0]];
            if ("string" == typeof this.options.pageList) {
                var r = this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").split(",");
                o = [], a.each(r, function (a, b) {
                    o.push(b.toUpperCase() === k.options.formatAllRows().toUpperCase() || "UNLIMITED" === b.toUpperCase() ? k.options.formatAllRows() : +b)
                })
            }
            for (a.each(o, function (a, b) {
                if (!k.options.smartDisplay || 0 === a || o[a - 1] < k.options.totalRows) {
                    var c;
                    c = m ? b === k.options.formatAllRows() ? "active" : "" : b === k.options.pageSize ? "active" : "", q.push(f(d.pageDropdownItemHtml, c, b))
                }
            }), q.push(d.pageDropdownHtml[1] + "</span>"), l.push(this.options.formatRecordsPerPage(q.join(""))), l.push("</span>"), l.push("</div>", f('<div class="%s-%s pagination">', d.pullClass, this.options.paginationHAlign), '<ul class="pagination' + f(" pagination-%s", this.options.iconSize) + '">', f('<li class="page-item page-pre"><a class="page-link" href="#">%s</a></li>', this.options.paginationPreText)), this.totalPages < 5 ? (c = 1, e = this.totalPages) : (c = this.options.pageNumber - 2, e = c + 4, 1 > c && (c = 1, e = 5), e > this.totalPages && (e = this.totalPages, c = e - 4)), this.totalPages >= 6 && (this.options.pageNumber >= 3 && (l.push(f('<li class="page-item page-first%s">', 1 === this.options.pageNumber ? " active" : ""), '<a class="page-link" href="#">', 1, "</a>", "</li>"), c++), this.options.pageNumber >= 4 && (4 == this.options.pageNumber || 6 == this.totalPages || 7 == this.totalPages ? c-- : l.push('<li class="page-item page-first-separator disabled">', '<a class="page-link" href="#">...</a>', "</li>"), e--)), this.totalPages >= 7 && this.options.pageNumber >= this.totalPages - 2 && c--, 6 == this.totalPages ? this.options.pageNumber >= this.totalPages - 2 && e++ : this.totalPages >= 7 && (7 == this.totalPages || this.options.pageNumber >= this.totalPages - 3) && e++, b = c; e >= b; b++) l.push(f('<li class="page-item%s">', b === this.options.pageNumber ? " active" : ""), '<a class="page-link" href="#">', b, "</a>", "</li>");
            this.totalPages >= 8 && this.options.pageNumber <= this.totalPages - 4 && l.push('<li class="page-item page-last-separator disabled">', '<a class="page-link" href="#">...</a>', "</li>"), this.totalPages >= 6 && this.options.pageNumber <= this.totalPages - 3 && l.push(f('<li class="page-item page-last%s">', this.totalPages === this.options.pageNumber ? " active" : ""), '<a class="page-link" href="#">', this.totalPages, "</a>", "</li>"), l.push(f('<li class="page-item page-next"><a class="page-link" href="#">%s</a></li>', this.options.paginationNextText), "</ul>", "</div>")
        }
        this.$pagination.html(l.join("")), this.options.onlyInfoPagination || (g = this.$pagination.find(".page-list a"), h = this.$pagination.find(".page-pre"), i = this.$pagination.find(".page-next"), j = this.$pagination.find(".page-item").not(".page-next, .page-pre"), this.options.smartDisplay && (this.totalPages <= 1 && this.$pagination.find("div.pagination").hide(), (o.length < 2 || this.options.totalRows <= o[0]) && this.$pagination.find("span.page-list").hide(), this.$pagination[this.getData().length ? "show" : "hide"]()), this.options.paginationLoop || (1 === this.options.pageNumber && h.addClass("disabled"), this.options.pageNumber === this.totalPages && i.addClass("disabled")), m && (this.options.pageSize = this.options.formatAllRows()), g.off("click").on("click", a.proxy(this.onPageListChange, this)), h.off("click").on("click", a.proxy(this.onPagePre, this)), i.off("click").on("click", a.proxy(this.onPageNext, this)), j.off("click").on("click", a.proxy(this.onPageNumber, this)))
    }, q.prototype.updatePagination = function (b) {
        b && a(b.currentTarget).hasClass("disabled") || (this.options.maintainSelected || this.resetRows(), this.initPagination(), "server" === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize))
    }, q.prototype.onPageListChange = function (b) {
        b.preventDefault();
        var c = a(b.currentTarget);
        return c.parent().addClass("active").siblings().removeClass("active"), this.options.pageSize = c.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +c.text(), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(b), !1
    }, q.prototype.onPagePre = function (a) {
        return a.preventDefault(), this.options.pageNumber - 1 === 0 ? this.options.pageNumber = this.options.totalPages : this.options.pageNumber--, this.updatePagination(a), !1
    }, q.prototype.onPageNext = function (a) {
        return a.preventDefault(), this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber = 1 : this.options.pageNumber++, this.updatePagination(a), !1
    }, q.prototype.onPageNumber = function (b) {
        return b.preventDefault(), this.options.pageNumber !== +a(b.currentTarget).text() ? (this.options.pageNumber = +a(b.currentTarget).text(), this.updatePagination(b), !1) : void 0
    }, q.prototype.initRow = function (b, c) {
        var d, e = this, h = [], i = {}, k = [], m = "", o = {}, p = [];
        if (!(a.inArray(b, this.hiddenRows) > -1)) {
            if (i = j(this.options, this.options.rowStyle, [b, c], i), i && i.css) for (d in i.css) k.push(d + ": " + i.css[d]);
            if (o = j(this.options, this.options.rowAttributes, [b, c], o)) for (d in o) p.push(f('%s="%s"', d, l(o[d])));
            return b._data && !a.isEmptyObject(b._data) && a.each(b._data, function (a, b) {
                "index" !== a && (m += f(' data-%s="%s"', a, b))
            }), h.push("<tr", f(" %s", p.join(" ")), f(' id="%s"', a.isArray(b) ? void 0 : b._id), f(' class="%s"', i.classes || (a.isArray(b) ? void 0 : b._class)), f(' data-index="%s"', c), f(' data-uniqueid="%s"', b[this.options.uniqueId]), f("%s", m), ">"), this.options.cardView && h.push(f('<td colspan="%s"><div class="card-views">', this.header.fields.length)), !this.options.cardView && this.options.detailView && (h.push("<td>"), j(null, this.options.detailFilter, [c, b]) && h.push('<a class="detail-icon" href="#">', f('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen), "</a>"), h.push("</td>")), a.each(this.header.fields, function (d, m) {
                var o = "", p = n(b, m, e.options.escape), q = "", r = "", s = {}, t = "", u = e.header.classes[d],
                    v = "", w = "", x = "", y = "", z = e.columns[d];

                if ((!e.fromHtml || "undefined" != typeof p || z.checkbox || z.radio) && z.visible && (!e.options.cardView || z.cardVisible)) {
                    if (z.escape && (p = l(p)), i = f('style="%s"', k.concat(e.header.styles[d]).join("; ")), b["_" + m + "_id"] && (t = f(' id="%s"', b["_" + m + "_id"])), b["_" + m + "_class"] && (u = f(' class="%s"', b["_" + m + "_class"])), b["_" + m + "_rowspan"] && (w = f(' rowspan="%s"', b["_" + m + "_rowspan"])), b["_" + m + "_colspan"] && (x = f(' colspan="%s"', b["_" + m + "_colspan"])), b["_" + m + "_title"] && (y = f(' title="%s"', b["_" + m + "_title"])), s = j(e.header, e.header.cellStyles[d], [p, b, c, m], s), s.classes && (u = f(' class="%s"', s.classes)), s.css) {
                        var A = [];
                        for (var B in s.css) A.push(B + ": " + s.css[B]);
                        i = f('style="%s"', A.concat(e.header.styles[d]).join("; "))
                    }
                    q = j(z, e.header.formatters[d], [p, b, c, m], p), b["_" + m + "_data"] && !a.isEmptyObject(b["_" + m + "_data"]) && a.each(b["_" + m + "_data"], function (a, b) {
                        "index" !== a && (v += f(' data-%s="%s"', a, b))
                    }), z.checkbox || z.radio ? (r = z.checkbox ? "checkbox" : r, r = z.radio ? "radio" : r, o = [f(e.options.cardView ? '<div class="card-view %s">' : '<td class="bs-checkbox %s">', z["class"] || ""), "<input" + f(' data-index="%s"', c) + f(' name="%s"', e.options.selectItemName) + f(' type="%s"', r) + f(' value="%s"', b[e.options.idField]) + f(' checked="%s"', q === !0 || p || q && q.checked ? "checked" : void 0) + f(' disabled="%s"', !z.checkboxEnabled || q && q.disabled ? "disabled" : void 0) + " />", e.header.formatters[d] && "string" == typeof q ? q : "", e.options.cardView ? "</div>" : "</td>"].join(""), b[e.header.stateField] = q === !0 || !!p || q && q.checked) : (q = "undefined" == typeof q || null === q ? e.options.undefinedText : q, o = e.options.cardView ? ['<div class="card-view">', e.options.showHeader ? f('<span class="title" %s>%s</span>', i, g(e.columns, "field", "title", m)) : "", f('<span class="value">%s</span>', q), "</div>"].join("") : [f("<td%s %s %s %s %s %s %s>", t, u, i, v, w, x, y), q, "</td>"].join(""), e.options.cardView && e.options.smartDisplay && "" === q && (o = '<div class="card-view"></div>')), h.push(o)
                }
            }), this.options.cardView && h.push("</div></td>"), h.push("</tr>"), h.join(" ")
        }
    }, q.prototype.initBody = function (b) {
        var c = this, d = this.getData();
        this.trigger("pre-body", d), this.$body = this.$el.find(">tbody"), this.$body.length || (this.$body = a("<tbody></tbody>").appendTo(this.$el)), this.options.pagination && "server" !== this.options.sidePagination || (this.pageFrom = 1, this.pageTo = d.length);
        for (var e, g = a(document.createDocumentFragment()), h = this.pageFrom - 1; h < this.pageTo; h++) {
            var i = d[h], k = this.initRow(i, h, d, g);
            e = e || !!k, k && k !== !0 && g.append(k)
        }
        e || g.append('<tr class="no-records-found">' + f('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()) + "</tr>"), this.$body.html(g), b || this.scrollTo(0), this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick", function (b) {
            var d = a(this), e = d.parent(), g = c.data[e.data("index")], h = d[0].cellIndex, i = c.getVisibleFields(),
                j = i[c.options.detailView && !c.options.cardView ? h - 1 : h], k = c.columns[c.fieldsColumnsIndex[j]],
                l = n(g, j, c.options.escape);
            if (!d.find(".detail-icon").length && (c.trigger("click" === b.type ? "click-cell" : "dbl-click-cell", j, l, g, d), c.trigger("click" === b.type ? "click-row" : "dbl-click-row", g, e, j), "click" === b.type && c.options.clickToSelect && k.clickToSelect && c.options.ignoreClickToSelectOn(b.target))) {
                var m = e.find(f('[name="%s"]', c.options.selectItemName));
                m.length && m[0].click()
            }
        }), this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click", function (b) {
            b.preventDefault();
            var e = a(this), g = e.parent().parent(), h = g.data("index"), i = d[h];
            if (g.next().is("tr.detail-view")) e.find("i").attr("class", f("%s %s", c.options.iconsPrefix, c.options.icons.detailOpen)), c.trigger("collapse-row", h, i, g.next()), g.next().remove(); else {
                e.find("i").attr("class", f("%s %s", c.options.iconsPrefix, c.options.icons.detailClose)), g.after(f('<tr class="detail-view"><td colspan="%s"></td></tr>', g.find("td").length));
                var k = g.next().find("td"), l = j(c.options, c.options.detailFormatter, [h, i, k], "");
                1 === k.length && k.append(l), c.trigger("expand-row", h, i, k)
            }
            return c.resetView(), !1
        }), this.$selectItem = this.$body.find(f('[name="%s"]', this.options.selectItemName)), this.$selectItem.off("click").on("click", function (b) {
            b.stopImmediatePropagation();
            var d = a(this), e = d.prop("checked"), f = c.data[d.data("index")];
            (a(this).is(":radio") || c.options.singleSelect) && a.each(c.options.data, function (a, b) {
                b[c.header.stateField] = !1
            }), f[c.header.stateField] = e, c.options.singleSelect && (c.$selectItem.not(this).each(function () {
                c.data[a(this).data("index")][c.header.stateField] = !1
            }), c.$selectItem.filter(":checked").not(this).prop("checked", !1)), c.updateSelected(), c.trigger(e ? "check" : "uncheck", f, d)
        }), a.each(this.header.events, function (b, d) {
            if (d) {
                "string" == typeof d && (d = j(null, d));
                var e = c.header.fields[b], f = a.inArray(e, c.getVisibleFields());
                if (-1 !== f) {
                    c.options.detailView && !c.options.cardView && (f += 1);
                    for (var g in d) c.$body.find(">tr:not(.no-records-found)").each(function () {
                        var b = a(this), h = b.find(c.options.cardView ? ".card-view" : "td").eq(f), i = g.indexOf(" "),
                            j = g.substring(0, i), k = g.substring(i + 1), l = d[g];
                        h.find(k).off(j).on(j, function (a) {
                            var d = b.data("index"), f = c.data[d], g = f[e];
                            l.apply(this, [a, g, f, d])
                        })
                    })
                }
            }
        }), this.updateSelected(), this.resetView(), this.trigger("post-body", d)
    }, q.prototype.initServer = function (b, c, d) {
        var e, f = this, g = {}, h = a.inArray(this.options.sortName, this.header.fields),
            i = {searchText: this.searchText, sortName: this.options.sortName, sortOrder: this.options.sortOrder};
        this.header.sortNames[h] && (i.sortName = this.header.sortNames[h]), this.options.pagination && "server" === this.options.sidePagination && (i.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, i.pageNumber = this.options.pageNumber), (d || this.options.url || this.options.ajax) && ("limit" === this.options.queryParamsType && (i = {
            search: i.searchText,
            sort: i.sortName,
            order: i.sortOrder
        }, this.options.pagination && "server" === this.options.sidePagination && (i.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), i.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, 0 === i.limit && delete i.limit)), a.isEmptyObject(this.filterColumnsPartial) || (i.filter = JSON.stringify(this.filterColumnsPartial, null)), g = j(this.options, this.options.queryParams, [i], g), a.extend(g, c || {}), g !== !1 && (b || this.$tableLoading.show(), e = a.extend({}, j(null, this.options.ajaxOptions), {
            type: this.options.method,
            url: d || this.options.url,
            data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(g) : g,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function (a) {
                a = j(f.options, f.options.responseHandler, [a], a), f.load(a), f.trigger("load-success", a), b || f.$tableLoading.hide()
            },
            error: function (a) {
                var c = [];
                "server" === f.options.sidePagination && (c = {}, c[f.options.totalField] = 0, c[f.options.dataField] = []), f.load(c), f.trigger("load-error", a.status, a), b || f.$tableLoading.hide()
            }
        }), this.options.ajax ? j(this, this.options.ajax, [e], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = a.ajax(e))))
    }, q.prototype.initSearchText = function () {
        if (this.options.search && (this.searchText = "", "" !== this.options.searchText)) {
            var a = this.$toolbar.find(".search input");
            a.val(this.options.searchText), this.onSearch({currentTarget: a, firedByInitSearchText: !0})
        }
    }, q.prototype.getCaret = function () {
        var b = this;
        a.each(this.$header.find("th"), function (c, d) {
            a(d).find(".sortable").removeClass("desc asc").addClass(a(d).data("field") === b.options.sortName ? b.options.sortOrder : "both")
        })
    }, q.prototype.updateSelected = function () {
        var b = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
        this.$selectAll.add(this.$selectAll_).prop("checked", b), this.$selectItem.each(function () {
            a(this).closest("tr")[a(this).prop("checked") ? "addClass" : "removeClass"]("selected")
        })
    }, q.prototype.updateRows = function () {
        var b = this;
        this.$selectItem.each(function () {
            b.data[a(this).data("index")][b.header.stateField] = a(this).prop("checked")
        })
    }, q.prototype.resetRows = function () {
        var b = this;
        a.each(this.data, function (a, c) {
            b.$selectAll.prop("checked", !1), b.$selectItem.prop("checked", !1), b.header.stateField && (c[b.header.stateField] = !1)
        }), this.initHiddenRows()
    }, q.prototype.trigger = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        b += ".bs.table", this.options[q.EVENTS[b]].apply(this.options, c), this.$el.trigger(a.Event(b), c), this.options.onAll(b, c), this.$el.trigger(a.Event("all.bs.table"), [b, c])
    }, q.prototype.resetHeader = function () {
        clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(a.proxy(this.fitHeader, this), this.$el.is(":hidden") ? 100 : 0)
    }, q.prototype.fitHeader = function () {
        var b, c, d, e, g = this;
        if (g.$el.is(":hidden")) return void(g.timeoutId_ = setTimeout(a.proxy(g.fitHeader, g), 100));
        if (b = this.$tableBody.get(0), c = b.scrollWidth > b.clientWidth && b.scrollHeight > b.clientHeight + this.$header.outerHeight() ? i() : 0, this.$el.css("margin-top", -this.$header.outerHeight()), d = a(":focus"), d.length > 0) {
            var h = d.parents("th");
            if (h.length > 0) {
                var j = h.attr("data-field");
                if (void 0 !== j) {
                    var k = this.$header.find("[data-field='" + j + "']");
                    k.length > 0 && k.find(":input").addClass("focus-temp")
                }
            }
        }
        this.$header_ = this.$header.clone(!0, !0), this.$selectAll_ = this.$header_.find('[name="btSelectAll"]'), this.$tableHeader.css({"margin-right": c}).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_), e = a(".focus-temp:visible:eq(0)"), e.length > 0 && (e.focus(), this.$header.find(".focus-temp").removeClass("focus-temp")), this.$header.find("th[data-field]").each(function () {
            g.$header_.find(f('th[data-field="%s"]', a(this).data("field"))).data(a(this).data())
        });
        var l = this.getVisibleFields(), m = this.$header_.find("th");
        this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function (b) {
            var c = a(this), d = b;
            if (g.options.detailView && !g.options.cardView && (0 === b && g.$header_.find("th.detail").find(".fht-cell").width(c.innerWidth()), d = b - 1), -1 !== d) {
                var e = g.$header_.find(f('th[data-field="%s"]', l[d]));
                e.length > 1 && (e = a(m[c[0].cellIndex]));
                var h = e.width() - e.find(".fht-cell").width();
                e.find(".fht-cell").width(c.innerWidth() - h)
            }
        }), this.horizontalScroll(), this.trigger("post-header")
    }, q.prototype.resetFooter = function () {
        var b = this, c = b.getData(), d = [];
        this.options.showFooter && !this.options.cardView && (!this.options.cardView && this.options.detailView && d.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>'), a.each(this.columns, function (a, e) {
            var g, h = "", i = "", k = [], l = {}, m = f(' class="%s"', e["class"]);
            if (e.visible && (!b.options.cardView || e.cardVisible)) {
                if (h = f("text-align: %s; ", e.falign ? e.falign : e.align), i = f("vertical-align: %s; ", e.valign), l = j(null, b.options.footerStyle), l && l.css) for (g in l.css) k.push(g + ": " + l.css[g]);
                d.push("<td", m, f(' style="%s"', h + i + k.concat().join("; ")), ">"), d.push('<div class="th-inner">'), d.push(j(e, e.footerFormatter, [c], "&nbsp;") || "&nbsp;"), d.push("</div>"), d.push('<div class="fht-cell"></div>'), d.push("</div>"), d.push("</td>")
            }
        }), this.$tableFooter.find("tr").html(d.join("")), this.$tableFooter.show(), clearTimeout(this.timeoutFooter_), this.timeoutFooter_ = setTimeout(a.proxy(this.fitFooter, this), this.$el.is(":hidden") ? 100 : 0))
    }, q.prototype.fitFooter = function () {
        var b, c, d;
        return clearTimeout(this.timeoutFooter_), this.$el.is(":hidden") ? void(this.timeoutFooter_ = setTimeout(a.proxy(this.fitFooter, this), 100)) : (c = this.$el.css("width"), d = c > this.$tableBody.width() ? i() : 0, this.$tableFooter.css({"margin-right": d}).find("table").css("width", c).attr("class", this.$el.attr("class")), b = this.$tableFooter.find("td"), this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function (c) {
            var d = a(this);
            b.eq(c).find(".fht-cell").width(d.innerWidth())
        }), void this.horizontalScroll())
    }, q.prototype.horizontalScroll = function () {
        var b = this;
        b.trigger("scroll-body"), this.$tableBody.off("scroll").on("scroll", function () {
            b.options.showHeader && b.options.height && b.$tableHeader.scrollLeft(a(this).scrollLeft()), b.options.showFooter && !b.options.cardView && b.$tableFooter.scrollLeft(a(this).scrollLeft())
        })
    }, q.prototype.toggleColumn = function (a, b, c) {
        if (-1 !== a && (this.columns[a].visible = b, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
            var d = this.$toolbar.find(".keep-open input").prop("disabled", !1);
            c && d.filter(f('[value="%s"]', a)).prop("checked", b), d.filter(":checked").length <= this.options.minimumCountColumns && d.filter(":checked").prop("disabled", !0)
        }
    }, q.prototype.getVisibleFields = function () {
        var b = this, c = [];
        return a.each(this.header.fields, function (a, d) {
            var e = b.columns[b.fieldsColumnsIndex[d]];
            e.visible && c.push(d)
        }), c
    }, q.prototype.resetView = function (a) {
        var b = 0;
        if (a && a.height && (this.options.height = a.height), this.$selectAll.prop("checked", this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.options.height) {
            var c = this.$toolbar.outerHeight(!0), d = this.$pagination.outerHeight(!0),
                e = this.options.height - c - d;
            this.$tableContainer.css("height", e + "px")
        }
        return this.options.cardView ? (this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), void this.$tableFooter.hide()) : (this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), b += this.$header.outerHeight()) : (this.$tableHeader.hide(), this.trigger("post-header")), this.options.showFooter && (this.resetFooter(), this.options.height && (b += this.$tableFooter.outerHeight() + 1)), this.getCaret(), this.$tableContainer.css("padding-bottom", b + "px"), void this.trigger("reset-view"))
    }, q.prototype.getData = function (b) {
        var c = this.options.data;
        return (this.searchText || this.options.sortName || !a.isEmptyObject(this.filterColumns) || !a.isEmptyObject(this.filterColumnsPartial)) && (c = this.data), b ? c.slice(this.pageFrom - 1, this.pageTo) : c
    }, q.prototype.load = function (b) {
        var c = !1;
        this.options.pagination && "server" === this.options.sidePagination ? (this.options.totalRows = b[this.options.totalField], c = b.fixedScroll, b = b[this.options.dataField]) : a.isArray(b) || (c = b.fixedScroll, b = b.data), this.initData(b), this.initSearch(), this.initPagination(), this.initBody(c)
    }, q.prototype.append = function (a) {
        this.initData(a, "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, q.prototype.prepend = function (a) {
        this.initData(a, "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, q.prototype.remove = function (b) {
        var c, d, e = this.options.data.length;
        if (b.hasOwnProperty("field") && b.hasOwnProperty("values")) {
            for (c = e - 1; c >= 0; c--) d = this.options.data[c], d.hasOwnProperty(b.field) && -1 !== a.inArray(d[b.field], b.values) && (this.options.data.splice(c, 1), "server" === this.options.sidePagination && (this.options.totalRows -= 1));
            e !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
        }
    }, q.prototype.removeAll = function () {
        this.options.data.length > 0 && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
    }, q.prototype.getRowByUniqueId = function (a) {
        var b, c, d, e = this.options.uniqueId, f = this.options.data.length, g = null;
        for (b = f - 1; b >= 0; b--) {
            if (c = this.options.data[b], c.hasOwnProperty(e)) d = c[e]; else {
                if (!c._data.hasOwnProperty(e)) continue;
                d = c._data[e]
            }
            if ("string" == typeof d ? a = a.toString() : "number" == typeof d && (Number(d) === d && d % 1 === 0 ? a = parseInt(a) : d === Number(d) && 0 !== d && (a = parseFloat(a))), d === a) {
                g = c;
                break
            }
        }
        return g
    }, q.prototype.removeByUniqueId = function (a) {
        var b = this.options.data.length, c = this.getRowByUniqueId(a);
        c && this.options.data.splice(this.options.data.indexOf(c), 1), b !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initBody(!0))
    }, q.prototype.updateByUniqueId = function (b) {
        var c = this, d = a.isArray(b) ? b : [b];
        a.each(d, function (b, d) {
            var e;
            d.hasOwnProperty("id") && d.hasOwnProperty("row") && (e = a.inArray(c.getRowByUniqueId(d.id), c.options.data), -1 !== e && a.extend(c.options.data[e], d.row))
        }), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, q.prototype.refreshColumnTitle = function (b) {
        if (b.hasOwnProperty("field") && b.hasOwnProperty("title") && (this.columns[this.fieldsColumnsIndex[b.field]].title = this.options.escape ? l(b.title) : b.title, this.columns[this.fieldsColumnsIndex[b.field]].visible)) {
            var c = void 0 !== this.options.height ? this.$tableHeader : this.$header;
            c.find("th[data-field]").each(function () {
                return a(this).data("field") === b.field ? (a(a(this).find(".th-inner")[0]).text(b.title), !1) : void 0
            })
        }
    }, q.prototype.insertRow = function (a) {
        a.hasOwnProperty("index") && a.hasOwnProperty("row") && (this.options.data.splice(a.index, 0, a.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
    }, q.prototype.updateRow = function (b) {
        var c = this, d = a.isArray(b) ? b : [b];
        a.each(d, function (b, d) {
            d.hasOwnProperty("index") && d.hasOwnProperty("row") && a.extend(c.options.data[d.index], d.row)
        }), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, q.prototype.initHiddenRows = function () {
        this.hiddenRows = []
    }, q.prototype.showRow = function (a) {
        this.toggleRow(a, !0)
    }, q.prototype.hideRow = function (a) {
        this.toggleRow(a, !1)
    }, q.prototype.toggleRow = function (b, c) {
        var d, e;
        b.hasOwnProperty("index") ? d = this.getData()[b.index] : b.hasOwnProperty("uniqueId") && (d = this.getRowByUniqueId(b.uniqueId)), d && (e = a.inArray(d, this.hiddenRows), c || -1 !== e ? c && e > -1 && this.hiddenRows.splice(e, 1) : this.hiddenRows.push(d), this.initBody(!0))
    }, q.prototype.getHiddenRows = function () {
        var b = this, c = this.getData(), d = [];
        return a.each(c, function (c, e) {
            a.inArray(e, b.hiddenRows) > -1 && d.push(e)
        }), this.hiddenRows = d, d
    }, q.prototype.mergeCells = function (b) {
        var c, d, e, f = b.index, g = a.inArray(b.field, this.getVisibleFields()), h = b.rowspan || 1,
            i = b.colspan || 1, j = this.$body.find(">tr");
        if (this.options.detailView && !this.options.cardView && (g += 1), e = j.eq(f).find(">td").eq(g), !(0 > f || 0 > g || f >= this.data.length)) {
            for (c = f; f + h > c; c++) for (d = g; g + i > d; d++) j.eq(c).find(">td").eq(d).hide();
            e.attr("rowspan", h).attr("colspan", i).show()
        }
    }, q.prototype.updateCell = function (a) {
        a.hasOwnProperty("index") && a.hasOwnProperty("field") && a.hasOwnProperty("value") && (this.data[a.index][a.field] = a.value, a.reinit !== !1 && (this.initSort(), this.initBody(!0)))
    }, q.prototype.updateCellById = function (b) {
        var c = this;
        if (b.hasOwnProperty("id") && b.hasOwnProperty("field") && b.hasOwnProperty("value")) {
            var d = a.isArray(b) ? b : [b];
            a.each(d, function (b, d) {
                var e;
                e = a.inArray(c.getRowByUniqueId(d.id), c.options.data), -1 !== e && (c.data[e][d.field] = d.value)
            }), b.reinit !== !1 && (this.initSort(), this.initBody(!0))
        }
    }, q.prototype.getOptions = function () {
        return a.extend(!0, {}, this.options)
    }, q.prototype.getSelections = function () {
        var b = this;
        return a.grep(this.options.data, function (a) {
            return a[b.header.stateField] === !0
        })
    }, q.prototype.getAllSelections = function () {
        var b = this;
        return a.grep(this.options.data, function (a) {
            return a[b.header.stateField]
        })
    }, q.prototype.checkAll = function () {
        this.checkAll_(!0)
    }, q.prototype.uncheckAll = function () {
        this.checkAll_(!1)
    }, q.prototype.checkInvert = function () {
        var b = this, c = b.$selectItem.filter(":enabled"), d = c.filter(":checked");
        c.each(function () {
            a(this).prop("checked", !a(this).prop("checked"))
        }), b.updateRows(), b.updateSelected(), b.trigger("uncheck-some", d), d = b.getSelections(), b.trigger("check-some", d)
    }, q.prototype.checkAll_ = function (a) {
        var b;
        a || (b = this.getSelections()), this.$selectAll.add(this.$selectAll_).prop("checked", a), this.$selectItem.filter(":enabled").prop("checked", a), this.updateRows(), a && (b = this.getSelections()), this.trigger(a ? "check-all" : "uncheck-all", b)
    }, q.prototype.check = function (a) {
        this.check_(!0, a)
    }, q.prototype.uncheck = function (a) {
        this.check_(!1, a)
    }, q.prototype.check_ = function (a, b) {
        var c = this.$selectItem.filter(f('[data-index="%s"]', b)).prop("checked", a);
        this.data[b][this.header.stateField] = a, this.updateSelected(), this.trigger(a ? "check" : "uncheck", this.data[b], c)
    }, q.prototype.checkBy = function (a) {
        this.checkBy_(!0, a)
    }, q.prototype.uncheckBy = function (a) {
        this.checkBy_(!1, a)
    }, q.prototype.checkBy_ = function (b, c) {
        if (c.hasOwnProperty("field") && c.hasOwnProperty("values")) {
            var d = this, e = [];
            a.each(this.options.data, function (g, h) {
                if (!h.hasOwnProperty(c.field)) return !1;
                if (-1 !== a.inArray(h[c.field], c.values)) {
                    var i = d.$selectItem.filter(":enabled").filter(f('[data-index="%s"]', g)).prop("checked", b);
                    h[d.header.stateField] = b, e.push(h), d.trigger(b ? "check" : "uncheck", h, i)
                }
            }), this.updateSelected(), this.trigger(b ? "check-some" : "uncheck-some", e)
        }
    }, q.prototype.destroy = function () {
        this.$el.insertBefore(this.$container), a(this.options.toolbar).insertBefore(this.$el), this.$container.next().remove(), this.$container.remove(), this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
    }, q.prototype.showLoading = function () {
        this.$tableLoading.show()
    }, q.prototype.hideLoading = function () {
        this.$tableLoading.hide()
    }, q.prototype.togglePagination = function () {
        this.options.pagination = !this.options.pagination;
        var a = this.$toolbar.find('button[name="paginationSwitch"] i');
        this.options.pagination ? a.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown) : a.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp), this.updatePagination()
    }, q.prototype.toggleFullscreen = function () {
        this.$el.closest(".bootstrap-table").toggleClass("fullscreen")
    }, q.prototype.refresh = function (a) {
        a && a.url && (this.options.url = a.url), a && a.pageNumber && (this.options.pageNumber = a.pageNumber), a && a.pageSize && (this.options.pageSize = a.pageSize), this.initServer(a && a.silent, a && a.query, a && a.url), this.trigger("refresh", a)
    }, q.prototype.resetWidth = function () {
        this.options.showHeader && this.options.height && this.fitHeader(), this.options.showFooter && !this.options.cardView && this.fitFooter()
    }, q.prototype.showColumn = function (a) {
        this.toggleColumn(this.fieldsColumnsIndex[a], !0, !0)
    }, q.prototype.hideColumn = function (a) {
        this.toggleColumn(this.fieldsColumnsIndex[a], !1, !0)
    }, q.prototype.getHiddenColumns = function () {
        return a.grep(this.columns, function (a) {
            return !a.visible
        })
    }, q.prototype.getVisibleColumns = function () {
        return a.grep(this.columns, function (a) {
            return a.visible
        })
    }, q.prototype.toggleAllColumns = function (b) {
        var c = this;
        if (a.each(this.columns, function (a) {
            c.columns[a].visible = b
        }), this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
            var d = this.$toolbar.find(".keep-open input").prop("disabled", !1);
            d.filter(":checked").length <= this.options.minimumCountColumns && d.filter(":checked").prop("disabled", !0)
        }
    }, q.prototype.showAllColumns = function () {
        this.toggleAllColumns(!0)
    }, q.prototype.hideAllColumns = function () {
        this.toggleAllColumns(!1)
    }, q.prototype.filterBy = function (b) {
        this.filterColumns = a.isEmptyObject(b) ? {} : b, this.options.pageNumber = 1, this.initSearch(), this.updatePagination()
    }, q.prototype.scrollTo = function (a) {
        return "string" == typeof a && (a = "bottom" === a ? this.$tableBody[0].scrollHeight : 0), "number" == typeof a && this.$tableBody.scrollTop(a), "undefined" == typeof a ? this.$tableBody.scrollTop() : void 0
    }, q.prototype.getScrollPosition = function () {
        return this.scrollTo()
    }, q.prototype.selectPage = function (a) {
        a > 0 && a <= this.options.totalPages && (this.options.pageNumber = a, this.updatePagination())
    }, q.prototype.prevPage = function () {
        this.options.pageNumber > 1 && (this.options.pageNumber--, this.updatePagination())
    }, q.prototype.nextPage = function () {
        this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
    }, q.prototype.toggleView = function () {
        this.options.cardView = !this.options.cardView, this.initHeader();
        var a = this.$toolbar.find('button[name="toggle"] i');
        this.options.cardView ? (a.removeClass(this.options.icons.toggleOff), a.addClass(this.options.icons.toggleOn)) : (a.removeClass(this.options.icons.toggleOn), a.addClass(this.options.icons.toggleOff)), this.initBody(), this.trigger("toggle", this.options.cardView)
    }, q.prototype.refreshOptions = function (b) {
        k(this.options, b, !0) || (this.options = a.extend(this.options, b), this.trigger("refresh-options", this.options), this.destroy(), this.init())
    }, q.prototype.resetSearch = function (a) {
        var b = this.$toolbar.find(".search input");
        b.val(a || ""), this.onSearch({currentTarget: b})
    }, q.prototype.expandRow_ = function (a, b) {
        var c = this.$body.find(f('> tr[data-index="%s"]', b));
        c.next().is("tr.detail-view") === (a ? !1 : !0) && c.find("> td > .detail-icon").click()
    }, q.prototype.expandRow = function (a) {
        this.expandRow_(!0, a)
    }, q.prototype.collapseRow = function (a) {
        this.expandRow_(!1, a)
    }, q.prototype.expandAllRows = function (b) {
        if (b) {
            var c = this.$body.find(f('> tr[data-index="%s"]', 0)), d = this, e = null, g = !1, h = -1;
            if (c.next().is("tr.detail-view") ? c.next().next().is("tr.detail-view") || (c.next().find(".detail-icon").click(), g = !0) : (c.find("> td > .detail-icon").click(), g = !0), g) try {
                h = setInterval(function () {
                    e = d.$body.find("tr.detail-view").last().find(".detail-icon"), e.length > 0 ? e.click() : clearInterval(h)
                }, 1)
            } catch (i) {
                clearInterval(h)
            }
        } else for (var j = this.$body.children(), k = 0; k < j.length; k++) this.expandRow_(!0, a(j[k]).data("index"))
    },q.prototype.collapseAllRows = function (b) {
        if (b) this.expandRow_(!1, 0); else for (var c = this.$body.children(), d = 0; d < c.length; d++) this.expandRow_(!1, a(c[d]).data("index"))
    },q.prototype.updateFormatText = function (a, b) {
        this.options[f("format%s", a)] && ("string" == typeof b ? this.options[f("format%s", a)] = function () {
            return b
        } : "function" == typeof b && (this.options[f("format%s", a)] = b)), this.initToolbar(), this.initPagination(), this.initBody()
    };
    var r = ["getOptions", "getSelections", "getAllSelections", "getData", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "updateCell", "updateByUniqueId", "removeByUniqueId", "getRowByUniqueId", "showRow", "hideRow", "getHiddenRows", "mergeCells", "refreshColumnTitle", "checkAll", "uncheckAll", "checkInvert", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "resetView", "resetWidth", "destroy", "showLoading", "hideLoading", "showColumn", "hideColumn", "getHiddenColumns", "getVisibleColumns", "showAllColumns", "hideAllColumns", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "togglePagination", "toggleView", "refreshOptions", "resetSearch", "expandRow", "collapseRow", "expandAllRows", "collapseAllRows", "updateFormatText", "updateCellById"];
    a.fn.bootstrapTable = function (b) {
        var c, d = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var e = a(this), f = e.data("bootstrap.table"),
                g = a.extend({}, q.DEFAULTS, e.data(), "object" == typeof b && b);
            if ("string" == typeof b) {
                if (a.inArray(b, r) < 0) throw new Error("Unknown method: " + b);
                if (!f) return;
                c = f[b].apply(f, d), "destroy" === b && e.removeData("bootstrap.table")
            }
            f || e.data("bootstrap.table", f = new q(this, g))
        }), "undefined" == typeof c ? this : c
    }, a.fn.bootstrapTable.Constructor = q, a.fn.bootstrapTable.defaults = q.DEFAULTS, a.fn.bootstrapTable.columnDefaults = q.COLUMN_DEFAULTS, a.fn.bootstrapTable.locales = q.LOCALES, a.fn.bootstrapTable.methods = r, a.fn.bootstrapTable.utils = {
        bootstrapVersion: b,
        sprintf: f,
        compareObjects: k,
        calculateObjectValue: j,
        getItemField: n,
        objectKeys: p,
        isIEBrowser: o
    }, a(function () {
        a('[data-toggle="table"]').bootstrapTable()
    })
}(jQuery);