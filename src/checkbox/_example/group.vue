<template>
  <t-space direction="vertical" size="48px">
    <t-space direction="vertical">
      <div>方式一：业务侧自定义全选功能。选中值: {{ value1.join(',') }}</div>
      <div>
        <t-checkbox :checked="checkAll" :indeterminate="indeterminate" :onChange="handleSelectAll">全选</t-checkbox>
      </div>
      <t-checkbox-group v-model="value1" :options="options1" @change="onChange1" />
    </t-space>

    <t-space direction="vertical">
      <div>方式二：组件内置全选功能，使用插槽定义选项。选中值: {{ value2.join(', ') }}</div>
      <t-checkbox-group v-model="value2" @change="onChange2">
        <t-checkbox :checkAll="true" label="全选" />
        <t-checkbox value="选项一">选项一</t-checkbox>
        <t-checkbox label="选项二" value="选项二" :disabled="true" />
        <t-checkbox label="选项三" value="选项三" />
      </t-checkbox-group>
    </t-space>

    <t-space direction="vertical">
      <div>方式三：组件内置全选功能，使用 `options` 定义选项。选中值: {{ value3.join(', ') }}</div>
      <t-checkbox-group v-model="value3" :options="options2" @change="onChange3" />
    </t-space>

    <t-space direction="vertical">
      <div>方式四：组件内置全选功能，非受控用法</div>
      <t-checkbox-group :defaultValue="['选项一']" :options="options2" />
    </t-space>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: ['选项一'],
      options1: [
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        { value: '选项一', label: (h) => <div>选项一</div> },
        { value: '选项二', label: '选项二' },
        { value: '选项三', label: '选项三' },
      ],

      value2: ['选项一'],
      value3: ['选项一', '选项二', '选项三'],
      options2: [
        { label: '全选', checkAll: true },
        { value: '选项一', label: '选项一' },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        { value: '选项二', label: (h) => <div>选项二</div> },
        { value: '选项三', label: '选项三' },
      ],
    };
  },
  computed: {
    checkAll() {
      return this.options1.length === this.value1.length;
    },
    indeterminate() {
      return !!(this.options1.length > this.value1.length && this.value1.length);
    },
  },
  methods: {
    handleSelectAll(checked) {
      this.value1 = checked ? ['选项一', '选项二', '选项三'] : [];
    },
    onChange1(val) {
      console.log(this.value1, val);
    },
    onChange2(val) {
      console.log(this.value2, val);
    },
    onChange3(val) {
      console.log(this.value3, val);
    },
  },
};
</script>
