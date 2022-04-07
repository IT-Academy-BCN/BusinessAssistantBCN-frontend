// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_BASE_URL: '',
  BACKEND_LOGIN_URL: '/login',
  BACKEND_REGISTER_URL: '/register',
  BACKEND_ZONES_URL: '../../assets/dummy/zones_dummy.json',
  BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL: '../../assets/dummy/activities_dummy.json',
  BACKEND_LARGE_STABLISHMENTS_SEARCH_URL: '../../assets/dummy/large-establishments_dummy.json',
  BACKEND_SAVED_SEARCHES_URL: '../../assets/dummy/saved-search-large-establishments_dummy.json',
  BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS: '../../assets/dummy/large_establishments_fake_filtered_results.json',
  BACKEND_BIG_MALLS_URL: '../assets/dummy/big-malls_dummy.json',
  BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS: '../assets/dummy/big-malls_fake_filtered_results.json',
  BACKEND_MUNICIPAL_MARKETS:'../../assets/dummy/municipal-markets_dummy.json',
  MAPBOX_TOKEN: 'pk.eyJ1IjoianZyZnJlZWxhbmNlZGV2ZWxvcGVyIiwiYSI6ImNreTl4czUzMTAwNGQydnFsdmRhYXRvbDUifQ.TVL-2T184QdfXbze6VNw4A',
  MAPBOX_ITAcademy_OBJECT: {
    name: "IT Academy",
    web: "bcn.cat/barcelonactiva",
    email: "itacademy@barcelonactiva.cat",
    phone: 932917610,
    activities: [],
    addresses: [
      {
        street_name: "Roc Boronat",
        number: "117-127",
        zip_code: "08018",
        district_id: "04",
        town: "BARCELONA",
        location: {
          x: 2.194060007737955,
          y: 41.40389733660671,
        },
      },
    ],
  }

};


