<template>
  <page-layout
    title="Unknown Assets"
    subtitle="An unknown asset is an asset without a location, i.e it is lost or
      disposed."
  >
    <template #content>
      <asset-table state="DL" :showLocationColumn="false" />
    </template>
  </page-layout>
</template>
