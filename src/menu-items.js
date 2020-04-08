export default {
    items: [
        {
            id: 'calon',
            title: 'Calon Siswa',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'beranda',
                    title: 'Beranda',
                    type: 'item',
                    url: '/user/beranda',
                    icon: 'feather icon-home',
                    breadcrumbs: false
                },
                {
                    id: 'news',
                    title: 'Pengumuman',
                    type: 'item',
                    url: '/user/news',
                    icon: 'feather icon-box',
                },
                {
                    id: 'biodata',
                    title: 'Biodata Pendaftaran',
                    type: 'item',
                    url: '/user/biodata',
                    icon: 'feather icon-user',
                },
                {
                    id: 'cetak',
                    title: 'Cetak Bukti Pendaftaran',
                    type: 'item',
                    url: '/user/cetak',
                    icon: 'feather icon-printer',
                }
            ]
        },
        // {
        //     id: 'panitia',
        //     title: 'Panitia',
        //     type: 'group',
        //     icon: 'icon-navigation',
        //     children: [
        //         {
        //             id: 'beranda',
        //             title: 'Beranda',
        //             type: 'item',
        //             url: '/user/beranda',
        //             icon: 'feather icon-home',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'news',
        //             title: 'Pengumuman',
        //             type: 'item',
        //             url: '/user/news',
        //             icon: 'feather icon-box',
        //         },
        //         {
        //             id: 'biodata',
        //             title: 'Biodata Pendaftaran',
        //             type: 'item',
        //             url: '/user/biodata',
        //             icon: 'feather icon-user',
        //         },
        //         {
        //             id: 'cetak',
        //             title: 'Cetak Bukti Pendaftaran',
        //             type: 'item',
        //             url: '/user/cetak',
        //             icon: 'feather icon-printer',
        //         }
        //     ]
        // },
        {
            id: 'others',
                title: 'Lainnya',
                type: 'group',
                icon: 'icon-help',
                children: [
                    {
                        id: 'help-pdf',
                        title: 'Download Panduan',
                        type: 'item',
                        url: '/user/panduan',
                        icon: 'feather icon-help-circle',
                    },
                    {
                        id: 'logout',
                        title: 'Keluar',
                        type: 'item',
                        url: '/pengumuman',
                        icon: 'feather icon-log-out',
                    }
                ]
        },
        {
            id: 'test',
                title: 'Test',
                type: 'group',
                icon: 'icon-test',
                children: [
                    {
                        id: 'form-pendaftaran',
                        title: 'Pendaftaran PPDB Online',
                        type: 'item',
                        url: '/pendaftaran',
                        icon: 'feather icon-help-circle',
                    }
                ]
        },
    ]
}