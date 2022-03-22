import Layout from '../../components/Layout';

const Department = () => {
    return (
        <Layout>
            <div>Department</div>
            <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex w-full mx-auto px-6 py-8">
                <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
                </div>
            </div>
            </main>
      </Layout>
    )
}

export default Department