import { Stack } from '@mui/material';

import { categories } from '~/utils/constants';

function Sidebar({ selectedCategory, setSelectedCategory }) {
    const handleSetCategory = (name) => {
        setSelectedCategory(name);
    };

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map((category) => {
                return (
                    <button
                        key={category.name}
                        className="category-btn"
                        style={{
                            background: category.name === selectedCategory && '#fc1503',
                            color: 'white',
                        }}
                        onClick={() => handleSetCategory(category.name)}
                    >
                        <span
                            style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}
                        >
                            {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
                            {category.name}
                        </span>
                    </button>
                );
            })}
        </Stack>
    );
}

export default Sidebar;
