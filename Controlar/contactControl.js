import { Contact } from "../Models/contact.js";

export const AddContact = async (req, res) => {
    const { name, email, phone, type, author } = req.body
    const findContact = await Contact.findOne({ phone });
    if (!findContact) {
        const saveContact = await Contact.create({
            name,
            email,
            phone,
            type,
            author,
        });
        res.json({ massage: 'Contact add Successfully' });
    } else {
        res.json({ massage: "contact are already exist" });
    }
}
export const ById = async (req, res) => {
    const author = req.params.id;

    try {
        const findContact = await Contact.find({ author });

        if (findContact.length === 0) {
            return res.json({ message: "No Contact Found added by this user" });
        }

        res.json({ message: "Contact Details are here", findContact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const update = async (req, res) => {
    const phone = req.params.phone;
    const { name, email, type, author } = req.body
    const findContact = await Contact.findOneAndUpdate({ phone }, {
        name,
        email,
        type,
        phone,
        author,
    })
    const newDetails = await Contact.findOne({ phone })
    if (!findContact) return res.json({ massage: "NO Contact found by this Details" })

    res.json({ massage: "Contact Update Successfully", newDetails })
}
export const deleteById = async (req, res) => {
    const deleteItem = req.params.id;
    const deleteData = await Contact.deleteOne({ name: deleteItem })
    if (deleteData) res.json({ massage: 'Delete Succesfully' })
    console.log(deleteItem, deleteData)
}