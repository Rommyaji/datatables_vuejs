<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                    :to="{name: 'surat.index'}" 
                     class="btn btn-primary btn-sm rounded shadow mb-3"
                >Back</router-link>

                <div class="box-header with-border">
                    <div class="box-title">
                        Edit Surat
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="update">
                            <div class="mb-3">
                                <label for="" class="form-label">Tanggal</label>
                                <input type="date" class="form-control" v-model="surat.Tanggal" required>
                                <div v-if="surat.Tanggal" class="text-danger">
                                    {{ surat.Tanggal[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Surat</label>
                                <input type="text" class="form-control" v-model="surat.Surat" required>
                                <div v-if="surat.Surat" class="text-danger">
                                    {{ surat.Surat[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Isi Surat</label>
                                <textarea type="text" class="form-control" v-model="surat.IsiSurat" required></textarea>
                                <div v-if="surat.IsiSurat" class="text-danger">
                                    {{ surat.IsiSurat[0] }}
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
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

    export default {
        setup() {

            let surat = reactive({
                Tanggal: '',
                Surat: '',
                IsiSurat: '',
            })

            const validation = ref([])

            const router = useRouter()
            const route = useRoute()

            onMounted(() => {
                axios.get(`http://localhost:3500/surat/${route.params.id}`)
                .then((result) => {
                    surat.Tanggal = result.data.data.Tanggal
                    surat.Surat = result.data.data.Surat
                    surat.IsiSurat = result.data.data.IsiSurat
                }).catch((err) => {
                    console.log(err.response.data);
                })
            })

            const update = () => {
                // if (surat.Tanggal === '' || surat.Surat === '' || surat.IsiSurat === '') {

                // }
                axios.put(`http://localhost:3500/surat/edit/${route.params.id}`, surat)
                .then(() => {
                    router.push({
                        name: 'surat.index'
                    })
                }).catch((err) => {
                    validation.value = err.response.data
                })
            }

            return {
                surat,
                validation,
                router,
                update
            }
        }
    }
</script>