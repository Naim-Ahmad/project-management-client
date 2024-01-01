import { Chip, ListItem, ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useDrag } from 'react-dnd';

import useToggler from '../../../../hooks/toggler/useToggler';

export default function TaskLists({ labelId, data }) {


  const [open, handleOpen] = useToggler()


  // const { drag, isDragging } = useDNDDrag(data?._id)
  const [collected, drag] = useDrag(()=>({
    type: 'listItem',
    item: {id: data._id},
    collect: (monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  }), [])

  // console.log(drag)



  const chipColor = data?.priority === 'heigh'
    ? <Chip color="primary" sx={{ textTransform: 'capitalize' }} size='small' label={data?.priority} />
      : data?.priority === 'moderate'
      ? <Chip color="warning" sx={{ textTransform: 'capitalize' }} size='small' label={data?.priority} />
      : <Chip sx={{ textTransform: 'capitalize' }} size='small' label={data?.priority} />


// console.log(data)
  return (
    <>

      {/* <DialogModal open={open} handleClose={handleOpen} id={data?._id} /> */}
      <ListItem
        
        // draggable={true}
        style={collected.isDragging ? { opacity: 0.2 } : {}}
        
        disablePadding
      >

        <ListItemButton ref={drag} role={undefined} sx={{ display: 'flex' }} dense>
          <ListItemText sx={{ display: 'flex', textTransform: 'capitalize', fontWeight: 'bold', alignItems: 'center', gap: '8px' }} secondary={chipColor} id={labelId} primary={data?.taskTitle} />
        </ListItemButton>
      </ListItem>
    </>
  )
} 