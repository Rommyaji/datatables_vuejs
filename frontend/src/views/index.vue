<template>

    <!-- <link rel="stylesheet" href=".../assets/font.css">
    <link rel="stylesheet" href=".../assets/bootstrap.css">
      <link rel="stylesheet" href=".../assets/datatables.css"> -->
    
    
    <div style="width: 95%; margin: 0 auto;">
    
        <div class="box fontsize">
            <router-link 
                :to="{name: 'surat.create'}" 
                class="btn btn-primary btn-sm rounded shadow mb-3"
            >Add</router-link>
        
                <div>
                  <div class="box">
                    <div class="box-header">
                      <b class="box-title">List Surat</b>
        
                      <div class="box-tools">
                        <div class="input-group input-group-sm hidden-xs" style="width: 150px;">
                          <input v-model="searchQuery" @input="search" type="text" name="table_search" class="form-control pull-right" placeholder="Search">
        
                          <div class="input-group-btn">
                            <button @click="search()" type="submit" class="btn btn-default">
                                <i class="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="table-responsive">
                        <table id="selectedColumn" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="th-sm" width="35px">No</th>
                                            <th class="th-sm" width="200px">Tanggal</th>
                                            <th class="th-sm" width="250px">No Surat</th>
                                            <th class="th-sm" width="240px">Surat</th>
                                            <th width="" class="th-sm">Isi Surat</th>
                                            <th class="pullcenter" width="10%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(surat, index) in surat.data" :key="index" >
                                            <td>{{ surat.No }}</td>
                                            <td>{{ surat.Tanggal }}</td>
                                            <td>{{ surat.NoSurat }}</td>
                                            <td>{{ surat.Surat }}</td>
                                            <td>{{ surat.IsiSurat }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <router-link
                                                    :to="{name: 'surat.edit', params: {id: surat.id}}"
                                                     class="btn btn-sm btn-outline-info"
                                                    > Edit </router-link>
                                                    <button class="btn btn-sm btn-outline-danger" @click.prevent="destroy(surat.id, index)">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <!-- <b-pagination
                                    v-model="currentPage"
                                    :total-rows="rows"
                                    :per-page="perPage"
                                    aria-controls="selectedColumn"
                                ></b-pagination> -->




                                
                    </div>
                    <!-- /.box-body -->
                  </div>
    
                  <!-- /.box -->
                </div>
              </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    import * as Swal from "sweetalert2"
    import { onMounted, ref } from 'vue'
    
        export default {
    
            setup() {
                let surat = ref([])
                const searchQuery = ref('');
                // const perPage = 3
                // const currentpage = 1
    
    
                onMounted(() => {
                    axios.get('http://localhost:3500/surat')
                    .then((result) => {
                        surat.value = result.data
                    }).catch((err) => {
                        console.log(err.response);
                    })
    
                })
    
    
                const destroy = (id, index) => {
                    Swal.fire({
                        title: "are you sure?",
                        text: "this action cant be reverted!!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes",
                        customClass: {
                            popup: 'fontsize'
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete(`http://localhost:3500/surat/${id}`)
                        .then(() => {
                            surat.value.data.splice(index, 1)
                        }).catch((err) => {
                            console.log(err.response.data);
                        })  
                        }
                    }).catch((err) => {
                        console.log(err.response);
                    })
                }
    
    
                const search = () => {
                    if (searchQuery.value.trim() === '') {
                        axios.get('http://localhost:3500/surat')
                    .then((result) => {
                        surat.value = result.data
                    }).catch((err) => {
                        console.log(err.response);
                    })
                    } else {
                        axios.get(`http://localhost:3500/surat/search/${searchQuery.value}`)
                            .then((result) => {
                                surat.value = result.data;
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                        
                    }
                }
    
    
    
                return {
                    surat,
                    destroy,
                    searchQuery,
                    search,
                    // perPage,
                    // currentpage
                }
            },
        }
    </script>
    
    
    <style>
        .swal-size {
            width: 300px;
        }
    
        .fontsize {
            font-size: 18px;
        }
    
        .table-responsive {
        overflow-x: auto;
    }
    
    </style>