<template>
    <b-table :data="nodes.results" :columns="columns"></b-table>
</template>

<script>
    export default {
        props: {
            nodes: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                columns: [
                    {
                        field: 'display_name',
                        label: 'Name',
                    },
                    {
                        field: 'node_type',
                        label: 'Type',
                    },
                    {
                        field: 'numchild',
                        label: 'Children',
                    }
                ]
            }
        }
    }
</script>