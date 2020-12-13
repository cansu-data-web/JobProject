<template>
  <div class="card-group">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title" style="color=red">NAME: {{ second.name }}</h5>
        <router-link :to="profileLink">
        {{second.name}} @{{second.username}}
      </router-link>
      </div>


      <div class="card-body">
        <p class="card-text">Company: {{ second.company.name }}</p>
        <p class="card-text">Company: {{ second.company.bs }}</p>
        <div>

      <!-- <router-link
      active-class="active"
      to="/detay"
      exact
      tag="li">
      <a>{{second.name}}</a>
    </router-link> -->

          <button
            class="btn btn-danger"          
            style="margin: 5px"           
            data-toggle="modal"
            data-target="#exampleModal"
          >
            SİL
          </button>
          <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#mdlCreate"
            @click="$emit('editSecond', second)"
          >
            GÜNCELLE
          </button>

              <!-- Modal Delete-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Silmek istediğinizden emin misiniz?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  data-dismiss="modal">Hayır</button>
        <button type="button" @click="this.delete" class="btn btn-primary" data-dismiss="modal">Evet</button>
      </div>
    </div>
  </div>
</div>

          <!-- Popup Edit Create-->
          <div
            class="modal animated zoomIn faster"
            id="mdlCreate"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mdlCreateLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="mdlCreateLabel">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </h5>
                </div>
                <div class="modal-body">
                  <div class="form-horizontal">
                    <form name="defaultForm" id="defaultForm" novalidate>
                      <div class="row">
                        <div class="col col-md-6">
                          <!-- Name -->
                          <div class="row form-group">
                            <div class="col-md-4">
                              <label for="name" class="form-control-label"
                                >Name</label
                              >
                            </div>
                            <div class="col-md-8">
                              <input  v-model="second.name"
                                type="text"
                                class="form-control form-control-sm"                               
                                id="name"
                              /> 
                            </div>
                          </div>

                          <!-- User Name -->
                          <div class="row form-group">
                            <div class="col-md-4">
                              <label for="name" class="form-control-label"
                                >User Name</label
                              >
                            </div>
                            <div class="col-md-8">
                              <input
                                type="text" v-model="second.username"
                                class="form-control form-control-sm"
                                name="username"
                                id="username"
                              />
                            </div>
                          </div>

                          <!-- Email -->
                          <div class="row form-group">
                            <div class="col-md-4">
                              <label for="name" class="form-control-label"
                                >Email</label
                              >
                            </div>
                            <div class="col-md-8">
                              <input
                                type="text" v-model="second.email"
                                class="form-control form-control-sm"
                                name="email"
                                id="email"
                              />
                            </div>
                          </div>

                          <!-- company-->
                          <div class="row form-group">
                            <div class="col-md-4">
                              <label for="name" class="form-control-label"
                                >Company</label
                              >
                            </div>
                            <div class="col-md-8">
                              <input
                                type="text" v-model="second.company.name"
                                class="form-control form-control-sm"
                                name="companyname"
                                id="companyname"
                              />
                            </div>
                          </div>

                          <!-- Phone -->
                          <div class="row form-group">
                            <div class="col-md-4">
                              <label for="name" class="form-control-label"
                                >Phone</label
                              >
                            </div>
                            <div class="col-md-8">
                              <input
                                type="text" v-model="second.phone"
                                class="form-control form-control-sm"
                                name="phone"
                                id="phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6">
                          <!-- adress-->
                          <div class="row form-group">
                            <div class="col-md-4">
                              <label
                                for="textarea-input"
                                class="form-control-label"
                                >Adress</label
                              >
                            </div>
                            <div class="col-md-8">
                              <textarea
                                id="textarea-input" v-model="second.address.city"
                                rows="4"
                                class="form-control form-control-sm"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    @click="$emit('saveSecond', second)"
                    data-dismiss="modal"
                    
                  >
                    Kaydet
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-secondary"
                    data-dismiss="modal"
                  >
                    İptal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
    second: { type: Object, required: true }
  },

   computed: {
    profileLink() {
      return `/detay/${this.second.id}`;
    }
  },

  data() {
    return {
      //showModal:false
    };
  },

   components: {
    //Details,
  },

  methods: {
    delete() {
      console.log(this.second);
      this.$emit("deleteSecond", this.second);
    },
  },
};
</script>