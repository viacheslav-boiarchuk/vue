<template>
    <div>
        <div class="page-title">
            <h3>Категории</h3>
        </div>
        <section>
            <div class="row">
                <CategoryCreate @created="addNewCategory"/>
                <CategoryEdit />
            </div>
        </section>
    </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate.vue';
import CategoryEdit from '@/components/CategoryEdit.vue';

export default {
    name: 'categories',
    data: () => ({
        categoriesData: [{ test: 1 }],
    }),
    methods: {
        addNewCategory(category) {
            this.categoriesData.push(category);
        },
    },
    components: {
        CategoryEdit, CategoryCreate,
    },
};
</script>
