export default {
  calon: {
    items: [
      {
        id: 'calon',
        title: 'Calon Siswa',
        type: 'group',
        icon: 'icon-navigation',
        role: 'calon',
        children: [
          {
            id: 'beranda',
            title: 'Beranda',
            type: 'item',
            url: '/user/beranda',
            icon: 'feather icon-home',
            role: 'calon',
            breadcrumbs: false
          },
          {
            id: 'news',
            title: 'Pengumuman',
            type: 'item',
            url: '/user/news',
            icon: 'feather icon-box',
            role: 'calon',
          },
          {
            id: 'biodata',
            title: 'Biodata Pendaftaran',
            type: 'item',
            url: '/user/biodata',
            icon: 'feather icon-user',
            role: 'calon',
          },
          {
            id: 'cetak',
            title: 'Cetak Bukti Pendaftaran',
            type: 'item',
            url: '/user/cetak',
            icon: 'feather icon-printer',
            role: 'calon',
          },
          {
            id: 'help-pdf',
            title: 'Download Panduan',
            type: 'item',
            url: '/user/panduan',
            icon: 'feather icon-help-circle',
            role: 'calon',
          }
        ]
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'group',
        icon: 'icon-help',
        children: [                    
          {
            id: 'user-profile',
            title: 'Profile',
            type: 'item',
            url: '/user/profile',
            icon: 'feather icon-github',
            role: 'user'
          },
          {
            id: 'logout',
            title: 'Log out',
            type: 'item',
            url: '/user/logout',
            icon: 'feather icon-log-out',
          }
        ]
      }
    ]    
  },

  user: {
    items: [
      {
        id: 'user',
        title: 'Panitia',
        type: 'group',
        icon: 'icon-navigation',
        role: 'user',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/user/panitia/dashboard',
            icon: 'feather icon-home',
            role: 'user',                    
            breadcrumbs: false
          },                
          {
            id: 'info-ppdb',
            title: 'Informasi Calon Siswa',
            type: 'item',
            url: '/user/panitia/progress',
            icon: 'feather icon-box',
            role: 'user',
          },
          {
            id: 'manage-ppdb',
            title: 'Kelola Calon Siswa',
            type: 'item',
            url: '/user/panitia/manage',
            icon: 'feather icon-user',
            role: 'user',
          },
          {
            id: 'toa',
            title: 'Kelola Pengumuman',
            type: 'item',
            url: '/user/panitia/toa',
            icon: 'feather icon-share-2',
            role: 'user',
          }
        ]
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'group',
        icon: 'icon-help',
        children: [                    
          {
            id: 'user-profile',
            title: 'Profile',
            type: 'item',
            url: '/user/profile',
            icon: 'feather icon-github',
            role: 'user'
          },
          {
            id: 'logout',
            title: 'Log out',
            type: 'item',
            url: '/user/logout',
            icon: 'feather icon-log-out',
          }
        ]
      }]    
  },

  admin: {
    items: [
      {
        id: 'user',
        title: 'Panitia',
        type: 'group',
        icon: 'icon-navigation',
        role: 'user',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/user/panitia/dashboard',
            icon: 'feather icon-home',
            role: 'user',                    
            breadcrumbs: false
          },                
          {
            id: 'info-ppdb',
            title: 'Informasi Calon Siswa',
            type: 'item',
            url: '/user/panitia/progress',
            icon: 'feather icon-box',
            role: 'user',
          },
          {
            id: 'manage-ppdb',
            title: 'Kelola Calon Siswa',
            type: 'item',
            url: '/user/panitia/manage',
            icon: 'feather icon-user',
            role: 'user',
          },
          {
            id: 'toa',
            title: 'Kelola Pengumuman',
            type: 'item',
            url: '/user/panitia/toa',
            icon: 'feather icon-share-2',
            role: 'user',
          }
        ]
      },
      {
        id: 'admin',
        title: 'Administrator',
        type: 'group',
        icon: 'icon-navigation',
        role: 'bendahara',
        children: [
          {
            id: 'bendahara',
            title: 'Bendahara',
            type: 'item',
            url: '/user/panitia/bendahara',
            icon: 'feather icon-life-buoy',
            role: 'bendahara',
            breadcrumbs: false
          },
          {
            id: 'admin-page',
            title: 'Admin Page',
            type: 'item',
            url: '/user/panitia/adminpage',
            icon: 'feather icon-shield',
            role: 'administrator',
            breadcrumbs: false
          },
        ]
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'group',
        icon: 'icon-help',
        children: [                    
          {
            id: 'user-profile',
            title: 'Profile',
            type: 'item',
            url: '/user/profile',
            icon: 'feather icon-github',
            role: 'user'
          },
          {
            id: 'logout',
            title: 'Log out',
            type: 'item',
            url: '/user/logout',
            icon: 'feather icon-log-out',
          }
        ]
      }
    ]
  }
};