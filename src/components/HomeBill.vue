<template>
    <p
        v-for="cur of currencies"
        :key="cur"
    >{{cur}}</p>

    <p
        v-for="rate of rates"
        :key="rate"
    >{{rate}}</p>
</template>

<script>
export default {
    data: () => ({
        currencies: ['RUB', 'EUR', 'USD'],
    }),
    props: ['rates'],
};
</script>
