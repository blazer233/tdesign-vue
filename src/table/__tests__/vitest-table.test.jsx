/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 该文件由脚本自动生成，如需修改请联系 PMC
 * This file generated by scripts of tdesign-api. `npm run api:docs Table Vue(PC) vitest,finalProject,useDefault`
 * If you need to modify this file, contact PMC first please.
 */
import { BaseTable } from '..';
import { getNormalTableMount, getEmptyDataTableMount } from './mount';

describe('BaseTable Component', () => {
  it('props.bordered works fine', () => {
    // bordered default value is false
    const wrapper1 = getNormalTableMount(BaseTable);
    expect(wrapper1.classes('t-table--bordered')).toBeFalsy();
    // bordered = true
    const wrapper2 = getNormalTableMount(BaseTable, { bordered: true });
    expect(wrapper2.classes('t-table--bordered')).toBeTruthy();
    // bordered = false
    const wrapper3 = getNormalTableMount(BaseTable, { bordered: false });
    expect(wrapper3.classes('t-table--bordered')).toBeFalsy();
  });

  it('props.bottomContent works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { bottomContent: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('slots.bottomContent works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { bottomContent: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });
  it('slots.bottom-content works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { 'bottom-content': (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('props.cellEmptyContent works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { cellEmptyContent: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('slots.cellEmptyContent works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { cellEmptyContent: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });
  it('slots.cell-empty-content works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { 'cell-empty-content': (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('props.empty works fine', () => {
    const wrapper = getEmptyDataTableMount(BaseTable, { empty: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('slots.empty works fine', () => {
    const wrapper = getEmptyDataTableMount(BaseTable, {
      scopedSlots: { empty: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('props.firstFullRow works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { firstFullRow: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__first-full-row').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });

  it('slots.firstFullRow works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { firstFullRow: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__first-full-row').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });
  it('slots.first-full-row works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { 'first-full-row': (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__first-full-row').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });

  it('props.fixedRows is equal [3, 1]', () => {
    const wrapper = getNormalTableMount(BaseTable, { fixedRows: [3, 1] });
    expect(wrapper.findAll('.t-table__row--fixed-top').length).toBe(3);
    expect(wrapper.findAll('.t-table__row--fixed-bottom').length).toBe(1);
  });

  it('props.footData works fine. `"tfoot.t-table__footer"` should exist', () => {
    const wrapper = getNormalTableMount(BaseTable);
    expect(wrapper.find('tfoot.t-table__footer').exists()).toBeTruthy();
  });

  it('props.footData works fine. `{"tfoot > tr":2}` should exist', () => {
    const wrapper = getNormalTableMount(BaseTable);
    expect(wrapper.findAll('tfoot > tr').length).toBe(2);
  });

  it('props.footerSummary works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { footerSummary: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__footer').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__row-full-element').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });

  it('slots.footerSummary works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { footerSummary: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__footer').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__row-full-element').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });
  it('slots.footer-summary works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { 'footer-summary': (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__footer').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__row-full-element').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });

  it('props.hover works fine', () => {
    // hover default value is false
    const wrapper1 = getNormalTableMount(BaseTable);
    expect(wrapper1.classes('t-table--hoverable')).toBeFalsy();
    // hover = true
    const wrapper2 = getNormalTableMount(BaseTable, { hover: true });
    expect(wrapper2.classes('t-table--hoverable')).toBeTruthy();
    // hover = false
    const wrapper3 = getNormalTableMount(BaseTable, { hover: false });
    expect(wrapper3.classes('t-table--hoverable')).toBeFalsy();
  });

  it('props.lastFullRow works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { lastFullRow: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__last-full-row').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });

  it('slots.lastFullRow works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { lastFullRow: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__last-full-row').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });
  it('slots.last-full-row works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { 'last-full-row': (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-table__last-full-row').exists()).toBeTruthy();
    expect(wrapper.find('td[colspan="3"]').exists()).toBeTruthy();
  });

  it('props.loading works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { loading: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-loading').exists()).toBeTruthy();
  });

  it('slots.loading works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { loading: (h) => <span class="custom-node">TNode</span> },
      loading: true,
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
    expect(wrapper.find('.t-loading').exists()).toBeTruthy();
  });

  it('props.loading: BaseTable contains element `.t-loading`', () => {
    // loading default value is undefined
    const wrapper = getNormalTableMount(BaseTable);
    expect(wrapper.find('.t-loading').exists()).toBeFalsy();
    // loading = false
    const wrapper1 = getNormalTableMount(BaseTable, { loading: false });
    expect(wrapper1.find('.t-loading').exists()).toBeFalsy();
    // loading = true
    const wrapper2 = getNormalTableMount(BaseTable, { loading: true });
    expect(wrapper2.find('.t-loading').exists()).toBeTruthy();
  });

  it('props.resizable works fine', () => {
    // resizable default value is false
    const wrapper1 = getNormalTableMount(BaseTable);
    expect(wrapper1.classes('t-table--column-resizable')).toBeFalsy();
    // resizable = true
    const wrapper2 = getNormalTableMount(BaseTable, { resizable: true });
    expect(wrapper2.classes('t-table--column-resizable')).toBeTruthy();
    // resizable = false
    const wrapper3 = getNormalTableMount(BaseTable, { resizable: false });
    expect(wrapper3.classes('t-table--column-resizable')).toBeFalsy();
  });

  it('props.rowAttributes is equal to { \'data-level\': \'level-1\' }', () => {
    const wrapper = getNormalTableMount(BaseTable, { rowAttributes: { 'data-level': 'level-1' } });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.attributes('data-level')).toBe('level-1');
  });
  it('props.rowAttributes is equal to [{ \'data-level\': \'level-1\' }, { \'data-name\': \'tdesign\' }]', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      rowAttributes: [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }],
    });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.attributes('data-level')).toBe('level-1');
    expect(domWrapper.attributes('data-name')).toBe('tdesign');
  });
  it('props.rowAttributes is equal to () => [{ \'data-level\': \'level-1\' }, { \'data-name\': \'tdesign\' }]', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      rowAttributes: () => [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }],
    });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.attributes('data-level')).toBe('level-1');
    expect(domWrapper.attributes('data-name')).toBe('tdesign');
  });
  it('props.rowAttributes is equal to [() => [{ \'data-level\': \'level-1\' }, { \'data-name\': \'tdesign\' }]]', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      rowAttributes: [() => [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]],
    });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.attributes('data-level')).toBe('level-1');
    expect(domWrapper.attributes('data-name')).toBe('tdesign');
  });

  it('props.rowClassName is equal to \'tdesign-class\'', () => {
    const wrapper = getNormalTableMount(BaseTable, { rowClassName: 'tdesign-class' });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.classes('tdesign-class')).toBeTruthy();
  });
  it('props.rowClassName is equal to { \'tdesign-class\': true, \'tdesign-class-next\': false }', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      rowClassName: { 'tdesign-class': true, 'tdesign-class-next': false },
    });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.classes('tdesign-class')).toBeTruthy();
    expect(domWrapper.classes('tdesign-class-next')).toBeFalsy();
  });
  it('props.rowClassName is equal to [\'tdesign-class-default\', { \'tdesign-class\': true, \'tdesign-class-next\': false }]', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      rowClassName: ['tdesign-class-default', { 'tdesign-class': true, 'tdesign-class-next': false }],
    });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.classes('tdesign-class-default')).toBeTruthy();
    expect(domWrapper.classes('tdesign-class')).toBeTruthy();
    expect(domWrapper.classes('tdesign-class-next')).toBeFalsy();
  });
  it('props.rowClassName is equal to () => ({ \'tdesign-class\': true, \'tdesign-class-next\': false })', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      rowClassName: () => ({ 'tdesign-class': true, 'tdesign-class-next': false }),
    });
    const domWrapper = wrapper.find('tbody > tr');
    expect(domWrapper.classes('tdesign-class')).toBeTruthy();
    expect(domWrapper.classes('tdesign-class-next')).toBeFalsy();
  });

  it('props.showHeader: BaseTable contains element `thead`', () => {
    // showHeader default value is true
    const wrapper = getNormalTableMount(BaseTable);
    expect(wrapper.find('thead').exists()).toBeTruthy();
    // showHeader = false
    const wrapper1 = getNormalTableMount(BaseTable, { showHeader: false });
    expect(wrapper1.find('thead').exists()).toBeFalsy();
    // showHeader = true
    const wrapper2 = getNormalTableMount(BaseTable, { showHeader: true });
    expect(wrapper2.find('thead').exists()).toBeTruthy();
    expect(wrapper2.element).toMatchSnapshot();
  });

  const sizeClassNameList = ['t-size-s', { 't-size-m': false }, 't-size-l'];
  ['small', 'medium', 'large'].forEach((item, index) => {
    it(`props.size is equal to ${item}`, () => {
      const wrapper = getNormalTableMount(BaseTable, { size: item });
      if (typeof sizeClassNameList[index] === 'string') {
        expect(wrapper.classes(sizeClassNameList[index])).toBeTruthy();
      } else if (typeof sizeClassNameList[index] === 'object') {
        const classNameKey = Object.keys(sizeClassNameList[index])[0];
        expect(wrapper.classes(classNameKey)).toBeFalsy();
      }
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  it('props.stripe works fine', () => {
    // stripe default value is false
    const wrapper1 = getNormalTableMount(BaseTable);
    expect(wrapper1.classes('t-table--striped')).toBeFalsy();
    // stripe = true
    const wrapper2 = getNormalTableMount(BaseTable, { stripe: true });
    expect(wrapper2.classes('t-table--striped')).toBeTruthy();
    // stripe = false
    const wrapper3 = getNormalTableMount(BaseTable, { stripe: false });
    expect(wrapper3.classes('t-table--striped')).toBeFalsy();
  });

  const tableLayoutExpectedDom = ['table.t-table--layout-auto', 'table.t-table--layout-fixed'];
  ['auto', 'fixed'].forEach((item, index) => {
    it(`props.tableLayout is equal to ${item}`, () => {
      const wrapper = getNormalTableMount(BaseTable, { tableLayout: item });
      expect(wrapper.find(tableLayoutExpectedDom[index]).exists()).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  it('props.topContent works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, { topContent: (h) => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('slots.topContent works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { topContent: (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });
  it('slots.top-content works fine', () => {
    const wrapper = getNormalTableMount(BaseTable, {
      scopedSlots: { 'top-content': (h) => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  const verticalAlignClassNameList = [
    't-vertical-align-top',
    { 't-vertical-align-middle': false },
    't-vertical-align-bottom',
  ];
  ['top', 'middle', 'bottom'].forEach((item, index) => {
    it(`props.verticalAlign is equal to ${item}`, () => {
      const wrapper = getNormalTableMount(BaseTable, { verticalAlign: item });
      if (typeof verticalAlignClassNameList[index] === 'string') {
        expect(wrapper.classes(verticalAlignClassNameList[index])).toBeTruthy();
      } else if (typeof verticalAlignClassNameList[index] === 'object') {
        const classNameKey = Object.keys(verticalAlignClassNameList[index])[0];
        expect(wrapper.classes(classNameKey)).toBeFalsy();
      }
    });
  });
});
