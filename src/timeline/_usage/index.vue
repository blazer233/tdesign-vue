<!-- 该脚本为自动生成，如有需要请在 /script/generate-usage.js 中调整 -->
<template>
  <base-usage :code="usageCode" :config-list="configList" :panel-list="panelList" @PanelChange="onPanelChange">
    <template #timePicker="{ configProps }">
      <t-timeline v-bind="configProps" />
    </template>
  </base-usage>
</template>

<script setup lang="jsx">
/* eslint-disable */
import { ref, onMounted } from '@vue/composition-api';
import configJson from './props.json';

const configList = ref(configJson);
const panelList = [{ label: 'timeline', value: 'timeline' }];

const usageCodeMap = { timePicker: '<t-timeline v-bind="configProps" />' };
const usageCode = ref(`<template>${usageCodeMap[panelList[0].value]?.trim()}</template>`);

function onPanelChange(panel) {
  usageCode.value = `<template>${usageCodeMap[panel]?.trim()}</template>`;
}
</script>
