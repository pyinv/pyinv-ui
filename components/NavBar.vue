<template>
    <b-navbar type="is-primary">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <strong>PyInv</strong>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Assets
            </b-navbar-item>
            <b-navbar-item href="#">
                Asset Models
            </b-navbar-item>
            <b-navbar-item href="#">
                Manufacturers
            </b-navbar-item>
            <b-navbar-dropdown label="Other">
                <b-navbar-item href="#">
                    Asset Codes
                </b-navbar-item>
                <b-navbar-item href="#">
                    Reports
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <input class="input" type="search" placeholder="Search...">
            </b-navbar-item>
            <b-navbar-dropdown label="Dan" right>
                <b-navbar-item href="#">
                    My Account
                </b-navbar-item>
                <b-navbar-item href="#">
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>