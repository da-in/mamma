<script lang="ts" setup>
import { DetailWrapper } from "@/components/Detail";
import { useRestaurantTagFilterText } from "@/store/use-tag-filter";
import TagFilter from "./TagFilter.vue";

const tagFilterText = useRestaurantTagFilterText();
</script>

<template>
  <DetailWrapper mt-20px>
    <template #summary
      >식사 시간
      <strong text-wavveLightBlue font-500>
        {{ tagFilterText }}
      </strong>
    </template>
    <template #detail>
      <TagFilter />
    </template>
  </DetailWrapper>
</template>
