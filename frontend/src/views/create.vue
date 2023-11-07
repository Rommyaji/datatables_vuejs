<template>
    <div class="container my-5">
        <div class="row justify-control-center">
            <div class="box box-primary col-sm-8">
                <router-link 
                    :to="{name: 'surat.index'}" 
                     class="btn btn-primary btn-sm rounded shadow mb-3"
                >Back</router-link>

                <div class="box-header with-border">
                    <div class=box-title>
                        Create Surat
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">No</label>
                                <input type="number" class="form-control" v-model="surat.No" required>
                                <div v-if="validation.No" class="text-danger">
                                    {{ validation.No[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Tanggal</label>
                                <input type="date" class="form-control" placeholder="DD-MM-YYYY" v-model="surat.Tanggal" required>
                                <div v-if="validation.Tanggal" class="text-danger">
                                    {{ validation.Tanggal[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Surat</label>
                                <input type="text" class="form-control" v-model="surat.Surat" required>
                                <div v-if="validation.Surat" class="text-danger">
                                    {{ validation.Surat[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Isi Surat</label>
                                <textarea class="form-control" rows="3" placeholder="Enter ..." v-model="surat.IsiSurat" required></textarea>
                                <div v-if="validation.IsiSurat" class="text-danger">
                                    {{ validation.IsiSurat[0] }}
                                </div>
                            </div>
                            <button class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

    export default {
        setup() {

            const surat = reactive({
                No: '',
                Surat: '',
                Tanggal: '',
                IsiSurat: '',
            })

            const validation = ref([])

            const router = useRouter()

            const store = () => {
                axios.post('http://localhost:3500/surat/create', surat)
                .then(() => {
                    router.push({
                        name: 'surat.index'
                    })
                }).catch((err) => {
                    validation.value = res.response.data
                })
            }

            return {
                surat,
                validation,
                router,
                store
            }
        }
    }
</script>