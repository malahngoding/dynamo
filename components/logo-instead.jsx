export const Logo = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: `calc(32px * 1.2)`,
            width: `calc(48px * 1.2)`,
            border: '4px solid #18191F'
        }}>
            <div style={{
                display: 'flex',
                flex: 1,
                height: '100%',
                backgroundColor: '#474A57'
            }} />
            <div style={{
                display: 'flex',
                flex: 2,
                borderLeft: '4px solid #18191F',
                backgroundColor: '#ffffff',
                height: '100%'
            }} />
        </div>
    )
}

