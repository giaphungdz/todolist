### <div align="center">Sử dụng Hooks với Redux và React Redux</div>

- React cho phép lập trình viên tự định nghĩa những `Custom Hooks` để phục vụ một mục đích nào đó.

- Ngoài những Hooks hỗ trợ bởi React, các thư viện khác khi tích hợp với React cũng tự xây dựng nên các Hooks cho riêng các thư viện đó.

- `Custom Hooks` là những Function cho lập trình viên tự định nghĩa và có thể sử dụng những tính năng của React Hooks ở bên trong nó. Giúp tách nhỏ Logic của một Component và sử dụng lại được ở nhiều nơi.

- Functions này thường đặt tên theo quy tắc và bắt đầu bằng từ khóa **`use`**.

---

### <div align="center">Sử dụng Hooks với React Redux</div>

- Cú pháp cũ trong Class nếu muốn kết nối với Redux:
```javascript
import {connect} from 'react-redux';
class Item extends Component {
    // ...
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editItem: (item) => {
            dispatch(actSelectedItem(item)) ;
            dispatch(actOpenForm()) ;
        },
        deleteItem: (id) => {
            dispatch(actDeteleItem(id)) ;
        } 
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        sort: state.sort,
        search: state.search
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item);
```

- React Redux khi sử dụng `Hooks` sẽ gọn nhẹ và bớt cồng kềnh thông qua `useSelector` và `useDispatch`

- Tài liệu: https://react-redux.js.org/api/hooks

- `useDispatch`:
    - Là một Custom Hooks được xây dụng bởi thư viện `React Redux`, nó cũng là một function
    - **Input**: Không có tham số
    - **Output**: Phương thức `dispatch` dùng để kích hoạt một `action` trong Redux
    ```javascript
    import { useDispatch } from 'react-redux';

    function Item() {
        const dispatch = useDispatch();
    }
    ```

- `useSelector`:
    - Là một Custom Hooks được xây dụng bởi thư viện `React Redux`, nó cũng là một function
    - Input: Một tham số là một hàm để `select` dữ liệu từ `store`. Gọi tên là `fnSelect`
    - Output: Giá trị trả về từ `fnSelect`
    - Đặc điểm của `fnSelect` là một hàm nhận vào 1 tham số là `state` được lưu trữ trong `store`.
    ```javascript
    import { useSelector } from 'react-redux';
    
    function Item() {
        // Cách 1
        const data = useSelector(function(state) {
            return state
        })

        // Cách 2
        const data = useSelector((state) => {
            return state
        })

        // Cách 3
        const data = useSelector(state => state)

        // Cách 4: Lấy một phần state để sử dụng (Khuyên dùng)
        const items = useSelector(state => state.items)
        const sort = useSelector(state => state.sort)
    }
    ```

#
#
#
#
#
#
#
#
#
#