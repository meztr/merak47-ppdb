import * as actionTypes from '../actions/adminLayoutActions';
import config from './../../config';

// const staticAdminData = [];

// const staticCalonData = {
//     "setuju": true,
//     "namasiswa": "Galih Agung Suprayogo",
//     "nisn": "7890",
//     "nik": "7890",
//     "jeniskelamin": "laki-laki",
//     "tempatlahirsiswa": "hjkl",
//     "tgllahirsiswa": "0",
//     "blnlahirsiswa": "Februari",
//     "tahunlahirsiswa": "2013",
//     "agamaSiswa": "Islam",
//     "kewarganegaraan": "Indonesia",
//     "alamatsiswa": "fghj",
//     "tinggalbersama": "Bersama orang tua",
//     "anakkebrp": "0",
//     "jmlsaudara": "1",
//     "statusdlmkeluarga": "Anak Kandung",
//     "nohapesiswa": "0874562453",
//     "pilihan1": "TKJ",
//     "pilihan2": "PBKS",
//     "namaAyah": "GFD",
//     "pendidikanAyah": "S1",
//     "pekerjaanAyah": "Wiraswasta",
//     "agamaAyah": "Islam",
//     "penghasilanAyah": "3jt-5jt",
//     "nohapeAyah": "087564433333",
//     "namaIbu": "JUGFH",
//     "pendidikanIbu": "DIPLOMA",
//     "pekerjaanIbu": "PNS",
//     "agamaIbu": "Islam",
//     "penghasilanIbu": "1jt-3jt",
//     "nohapeIbu": "08745345353",
//     "namaWali": "HUHFG",
//     "pendidikanWali": "S1",
//     "pekerjaanWali": "Wiraswasta",
//     "penghasilanWali": "3jt-5jt",
//     "nohapeWali": "08745634535",
//     "sekolahasal": "SMPN 99 JASDA",
//     "statussekolah": "Negeri",
//     "alamatSekolah": "JOJA",
//     "tahunlulus": "2020"
// };

const initialState = {
    isOpen: [], //for active default menu
    isTrigger: [], //for active default menu, set blank for horizontal
    ...config,
    isFullScreen: false, // static can't change
};

export default function(state = initialState, action) {
    let trigger = [];
    let open = [];

    switch (action.type) {
        case actionTypes.COLLAPSE_MENU:
            console.log('COLLAPSE_MENU');
            return {
                ...state,
                collapseMenu: !state.collapseMenu
            };
        case actionTypes.COLLAPSE_TOGGLE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }

                if (triggerIndex === -1) {
                    open = [...open, action.menu.id];
                    trigger = [...trigger, action.menu.id];
                }
            } else {
                open = state.isOpen;
                const triggerIndex = (state.isTrigger).indexOf(action.menu.id);
                trigger = (triggerIndex === -1) ? [action.menu.id] : [];
                open = (triggerIndex === -1) ? [action.menu.id] : [];
            }

            return {
                ...state,
                isOpen: open,
                isTrigger: trigger
            };
        case actionTypes.NAV_CONTENT_LEAVE:
            return {
                ...state,
                isOpen: open,
                isTrigger: trigger,
            };
        case actionTypes.NAV_COLLAPSE_LEAVE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }
                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger,
                };
            }
            return {...state};
        case actionTypes.FULL_SCREEN :
            console.log('FULL_SCREEN');
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        case actionTypes.FULL_SCREEN_EXIT:
            console.log('FULL_SCREEN_EXIT');
            return {
                ...state,
                isFullScreen: false
            };
        case actionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layout: action.layout
            }
        // case actionTypes.FETCH_CALON_DATA:
        //     console.log('fetch_calon_data');
        //     return {
        //         ...state,
        //         ppdbCalonData: staticCalonData //Object.values(action.payload) || {}  //Object.values(action.payload)
        //     }
        // case actionTypes.FETCH_AUTH_DATA:
        //     console.log('FETCH_AUTH_DATA');
        //     return {
        //         ...state,
        //         ppdbAdminData: staticAdminData
        //     }
        default:
            return state;
    }
}