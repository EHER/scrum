function ListCtrl($scope) {
    $scope.lists = [
        {
            'title': 'To do',
            'count': 3,
            'cards': [
                {
                    'title': 'First card',
                    'description': 'what to do'
                },
                {
                    'title': 'Second card',
                    'description': 'Something to do'
                },
                {
                    'title': 'Another card',
                    'description': 'oh yeah'
                }
            ]
        },
        {
            'title': 'Doing',
            'count': 2,
            'cards': [
                {
                    'title': 'First card',
                    'description': 'what to do'
                },
                {
                    'title': 'Another card',
                    'description': 'oh yeah'
                }
            ]
        },
        {
            'title': 'Done',
            'count': 1,
            'cards': [
                {
                    'title': 'Another card',
                    'description': 'oh yeah'
                }
            ]
        }
    ];
}
